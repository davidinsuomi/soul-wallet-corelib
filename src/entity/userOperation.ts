/*
 * @Description: 
 * @Version: 1.0
 * @Autor: z.cejay@gmail.com
 * @Date: 2022-07-25 10:53:52
 * @LastEditors: cejay
 * @LastEditTime: 2022-08-05 15:51:01
 */

/**
 * @link https://github.com/eth-infinitism/account-abstraction/blob/develop/contracts/UserOperation.sol    
 */
class UserOperation {
    /**
     * @param sender the sender account of this request
     */
    sender: string = '';
    /**
     * @param nonce unique value the sender uses to verify it is not a replay.
     */
    nonce: number = 0;
    /**
     * @param initCode if set, the account contract will be created by this constructor
     */
    initCode: string = '0x';
    /**
     * @param callData the method call to execute on this account.
     */
    callData: string = '0x';
    /**
     * @param callGas gas used for validateUserOp and validatePaymasterUserOp
     */
    callGas: string = '0';
    /**
     * @param verificationGas gas not calculated by the handleOps method, but added to the gas paid. Covers batch overhead.
     */
    verificationGas: string = '0';
    /**
     * @param preVerificationGas gas not calculated by the handleOps method, but added to the gas paid. Covers batch overhead.
     */
    preVerificationGas: string = '0';
    /**
     * @param maxFeePerGas same as EIP-1559 gas parameter
     */
    maxFeePerGas: string = '0';
    /**
     * @param maxPriorityFeePerGas same as EIP-1559 gas parameter
     */
    maxPriorityFeePerGas: string = '0';
    /**
     * @param paymaster if set, the paymaster will pay for the transaction instead of the sender
     */
    paymaster: string = '0x';
    /**
     * @param paymasterData extra data used by the paymaster for validation
     */
    paymasterData: string = '0x';
    /**
     * @param signature sender-verified signature over the entire request, the EntryPoint address and the chain ID.
     */
    signature: string = '0x';

}



export { UserOperation };