/*
 * @Description: 
 * @Version: 1.0
 * @Autor: z.cejay@gmail.com
 * @Date: 2022-07-25 10:53:52
 * @LastEditors: cejay
 * @LastEditTime: 2022-08-05 22:46:12
 */

import { Guard } from '../utils/guard';

/**
 * @link https://github.com/eth-infinitism/account-abstraction/blob/develop/contracts/UserOperation.sol    
 */

class UserOperation {

    public sender: string = '';
    public nonce: number = 0;
    public initCode: string = '0x';
    public callData: string = '0x';
    public callGas: number = 0;
    public verificationGas: number = 0;
    public preVerificationGas: number = 21000;
    public maxFeePerGas: number = 0;
    public maxPriorityFeePerGas: number = 0;
    public paymaster: string = '0x';
    public paymasterData: string = '0x';
    public signature: string = '0x';

    constructor(
        sender: string,
        nonce: number,
        paymaster: string,
        callData: string = '0x',
        initCode: string = '0x'
    ) {
        this.sender = sender;
        this.nonce = nonce;
        this.initCode = initCode;
        this.callData = callData;
        this.paymaster = paymaster;
    }

}



export { UserOperation };