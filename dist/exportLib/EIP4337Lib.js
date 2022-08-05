"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EIP4337Lib = void 0;
const address_1 = require("../defines/address");
const userOperation_1 = require("../entity/userOperation");
/*
 * @Description:
 * @Version: 1.0
 * @Autor: z.cejay@gmail.com
 * @Date: 2022-08-05 16:08:23
 * @LastEditors: cejay
 * @LastEditTime: 2022-08-05 16:27:27
 */
class EIP4337Lib {
    /**
        * calculate EIP-4337 wallet address
        * @param initCodeHash the init code after keccak256
        * @param salt the salt number
        * @param create2Factory create2factory address defined in EIP-2470
        * @returns the EIP-4337 wallet address
        */
    static calculateWalletAddress(initCodeHash, salt, create2Factory = address_1.Create2Factory) {
        return '<address>';
    }
    /**
     * Initialize UserOperation
     * @param sender EIP-4337 wallet address
     * @param nonce unique value the sender uses to verify it is not a replay. (uint256) from 0
     * @param initCode if set, the account contract will be created
     * @param callData the method call to execute on this account.
     * @param callGas gas used for validateUserOp and validatePaymasterUserOp
     * @param verificationGas gas not calculated by the handleOps method, but added to the gas paid. Covers batch overhead.
     * @param preVerificationGas gas not calculated by the handleOps method, but added to the gas paid. Covers batch overhead.
     * @param maxFeePerGas same as EIP-1559 gas parameter
     * @param maxPriorityFeePerGas same as EIP-1559 gas parameter
     * @param paymaster if set, the paymaster will pay for the transaction instead of the sender
     * @param paymasterData extra data used by the paymaster for validation
     * @returns
     */
    static initUserOperation(sender, nonce, initCode, callData, callGas, verificationGas, preVerificationGas, maxFeePerGas, maxPriorityFeePerGas, paymaster, paymasterData) {
        const userOperation = new userOperation_1.UserOperation();
        userOperation.sender = sender;
        userOperation.nonce = nonce;
        if (initCode)
            userOperation.initCode = initCode;
        userOperation.callData = callData;
        userOperation.callGas = callGas;
        userOperation.verificationGas = verificationGas;
        userOperation.preVerificationGas = preVerificationGas;
        userOperation.maxFeePerGas = maxFeePerGas;
        userOperation.maxPriorityFeePerGas = maxPriorityFeePerGas;
        userOperation.paymaster = paymaster;
        userOperation.paymasterData = paymasterData;
        return userOperation;
    }
    /**
     * update gas
     * @param entryPoint the entryPoint address
     * @param userOperation the userOperation to update
     * @param estimateGasFunc  the function to estimate gas
     */
    static estimateGas(entryPoint, userOperation, estimateGasFunc) {
        return __awaiter(this, void 0, void 0, function* () {
            userOperation.callGas = (yield estimateGasFunc({
                from: entryPoint,
                to: userOperation.sender,
                data: userOperation.callData,
            })).toString();
            userOperation.verificationGas = '';
            userOperation.preVerificationGas = '';
        });
    }
    /**
     * Sign the userOperation with the given private key
     * @param userOperation the userOperation to sign
     * @param privateKey private key
     */
    static signUserOp(userOperation, privateKey) {
        // auto update the gas before signing
        // #TODO
        userOperation.signature = '<signature>';
    }
}
exports.EIP4337Lib = EIP4337Lib;
//# sourceMappingURL=EIP4337Lib.js.map