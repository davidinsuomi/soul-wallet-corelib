/**
 * @link https://github.com/eth-infinitism/account-abstraction/blob/develop/contracts/UserOperation.sol
 */
declare class UserOperation {
    /**
     * @param sender the sender account of this request
     */
    sender: string;
    /**
     * @param nonce unique value the sender uses to verify it is not a replay.
     */
    nonce: number;
    /**
     * @param initCode if set, the account contract will be created by this constructor
     */
    initCode: string;
    /**
     * @param callData the method call to execute on this account.
     */
    callData: string;
    /**
     * @param callGas gas used for validateUserOp and validatePaymasterUserOp
     */
    callGas: string;
    /**
     * @param verificationGas gas not calculated by the handleOps method, but added to the gas paid. Covers batch overhead.
     */
    verificationGas: string;
    /**
     * @param preVerificationGas gas not calculated by the handleOps method, but added to the gas paid. Covers batch overhead.
     */
    preVerificationGas: string;
    /**
     * @param maxFeePerGas same as EIP-1559 gas parameter
     */
    maxFeePerGas: string;
    /**
     * @param maxPriorityFeePerGas same as EIP-1559 gas parameter
     */
    maxPriorityFeePerGas: string;
    /**
     * @param paymaster if set, the paymaster will pay for the transaction instead of the sender
     */
    paymaster: string;
    /**
     * @param paymasterData extra data used by the paymaster for validation
     */
    paymasterData: string;
    /**
     * @param signature sender-verified signature over the entire request, the EntryPoint address and the chain ID.
     */
    signature: string;
}
export { UserOperation };
