/*
 * @Description: 
 * @Version: 1.0
 * @Autor: z.cejay@gmail.com
 * @Date: 2022-08-05 16:08:23
 * @LastEditors: cejay
 * @LastEditTime: 2022-08-05 21:32:15
 */

import { getCreate2Address, hexlify, hexZeroPad, keccak256 } from "ethers/lib/utils";
import { Create2Factory } from "../defines/address";
import { TransactionInfo } from "../entity/transactionInfo";
import { UserOperation } from "../entity/userOperation";
import { Guard } from "../utils/guard";
import { Web3Helper } from "../utils/web3Helper";
import { AbiItem } from 'web3-utils';


export class EIP4337Lib {

    /**
     * User Operation
     */
    public static UserOperation = UserOperation;


    /**
     * calculate EIP-4337 wallet address
     * @param initCode the init code
     * @param jsonInterface the jsonInterface of the contract
     * @param initArgs the init args
     * @param salt the salt number
     * @param create2Factory create2factory address defined in EIP-2470
     * @returns 
     */
    public static calculateWalletAddressByCode(
        initCode: string, jsonInterface: AbiItem | AbiItem[], initArgs: any[] | undefined,
        salt: number, create2Factory = Create2Factory): string {
        Guard.hex(initCode);
        const web3 = Web3Helper.new().web3;
        const initCodeWithArgs = new web3.eth.Contract(jsonInterface).deploy({
            data: initCode,
            arguments: initArgs
        }).encodeABI();
        const initCodeHash = keccak256(initCodeWithArgs);
        return EIP4337Lib.calculateWalletAddressByCodeHash(initCodeHash, salt, create2Factory);

    }

    /**
     * calculate EIP-4337 wallet address
     * @param initCodeHash the init code after keccak256
     * @param salt the salt number
     * @param create2Factory create2factory address defined in EIP-2470
     * @returns the EIP-4337 wallet address
     */
    public static calculateWalletAddressByCodeHash(initCodeHash: string, salt: number, create2Factory = Create2Factory): string {

        Guard.keccak256(initCodeHash);
        Guard.uint(salt);
        Guard.address(create2Factory);

        const saltBytes32 = hexZeroPad(hexlify(salt), 32);
        return getCreate2Address(create2Factory, saltBytes32, initCodeHash);
    }


    /**
     * update gas
     * @param entryPoint the entryPoint address
     * @param userOperation the userOperation to update
     * @param estimateGasFunc  the function to estimate gas
     */
    public static async estimateGas(
        entryPoint: string,
        userOperation: UserOperation,
        estimateGasFunc: (txInfo: TransactionInfo) => Promise<number>) {

        Guard.address(entryPoint);

        userOperation.callGas = await estimateGasFunc({
            from: entryPoint,
            to: userOperation.sender,
            data: userOperation.callData,
        });
    }

    /**
     * Sign the userOperation with the given private key
     * @param userOperation the userOperation to sign
     * @param privateKey private key
     */
    public static signUserOp(userOperation: UserOperation, privateKey: string) {
        // auto update the gas before signing
        // #TODO

        userOperation.signature = '<signature>';
    }

}