pragma solidity 0.8.16;

interface DataAttesterInterface {
     function settleAndGetAssertionResult(bytes32 dataId) external returns (bool);
}