pragma solidity 0.8.16;

interface WorkerAttesterInterface {
     function settleAndGetAssertionResult(address worker) external returns (bool);
}