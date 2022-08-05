"use strict";
/*
 * @Description:
 * @Version: 1.0
 * @Autor: z.cejay@gmail.com
 * @Date: 2022-07-25 10:53:52
 * @LastEditors: cejay
 * @LastEditTime: 2022-08-05 15:51:01
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserOperation = void 0;
/**
 * @link https://github.com/eth-infinitism/account-abstraction/blob/develop/contracts/UserOperation.sol
 */
class UserOperation {
    constructor() {
        /**
         * @param sender the sender account of this request
         */
        this.sender = '';
        /**
         * @param nonce unique value the sender uses to verify it is not a replay.
         */
        this.nonce = 0;
        /**
         * @param initCode if set, the account contract will be created by this constructor
         */
        this.initCode = '0x';
        /**
         * @param callData the method call to execute on this account.
         */
        this.callData = '0x';
        /**
         * @param callGas gas used for validateUserOp and validatePaymasterUserOp
         */
        this.callGas = '0';
        /**
         * @param verificationGas gas not calculated by the handleOps method, but added to the gas paid. Covers batch overhead.
         */
        this.verificationGas = '0';
        /**
         * @param preVerificationGas gas not calculated by the handleOps method, but added to the gas paid. Covers batch overhead.
         */
        this.preVerificationGas = '0';
        /**
         * @param maxFeePerGas same as EIP-1559 gas parameter
         */
        this.maxFeePerGas = '0';
        /**
         * @param maxPriorityFeePerGas same as EIP-1559 gas parameter
         */
        this.maxPriorityFeePerGas = '0';
        /**
         * @param paymaster if set, the paymaster will pay for the transaction instead of the sender
         */
        this.paymaster = '0x';
        /**
         * @param paymasterData extra data used by the paymaster for validation
         */
        this.paymasterData = '0x';
        /**
         * @param signature sender-verified signature over the entire request, the EntryPoint address and the chain ID.
         */
        this.signature = '0x';
    }
}
exports.UserOperation = UserOperation;
//# sourceMappingURL=userOperation.js.map