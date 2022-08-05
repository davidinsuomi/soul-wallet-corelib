import { TransactionInfo } from "../entity/transactionInfo";
import { UserOperation } from "../entity/userOperation";
export declare class EIP4337Lib {
    /**
        * calculate EIP-4337 wallet address
        * @param initCodeHash the init code after keccak256
        * @param salt the salt number
        * @param create2Factory create2factory address defined in EIP-2470
        * @returns the EIP-4337 wallet address
        */
    static calculateWalletAddress(initCodeHash: string, salt: number, create2Factory?: string): string;
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
    static initUserOperation(sender: string, nonce: number, initCode: string | null, callData: string, callGas: string, verificationGas: string, preVerificationGas: string, maxFeePerGas: string, maxPriorityFeePerGas: string, paymaster: string, paymasterData: string): UserOperation;
    /**
     * update gas
     * @param entryPoint the entryPoint address
     * @param userOperation the userOperation to update
     * @param estimateGasFunc  the function to estimate gas
     */
    static estimateGas(entryPoint: string, userOperation: UserOperation, estimateGasFunc: (txInfo: TransactionInfo) => Promise<number>): Promise<void>;
    /**
     * Sign the userOperation with the given private key
     * @param userOperation the userOperation to sign
     * @param privateKey private key
     */
    static signUserOp(userOperation: UserOperation, privateKey: string): void;
}
