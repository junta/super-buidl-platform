const contracts = {
  5: [
    {
      name: "goerli",
      chainId: "5",
      contracts: {
        SuperBuidl: {
          address: "0x26439c143fFF24B4C9114eF77f568B596613078F",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_owner",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_workerAttester",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [],
              name: "Unauthorized",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "accountList",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_account",
                  type: "address",
                },
              ],
              name: "allowAccount",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_newOwner",
                  type: "address",
                },
              ],
              name: "changeOwner",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "contract ISuperToken",
                  name: "token",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "receiver",
                  type: "address",
                },
                {
                  internalType: "int96",
                  name: "flowRate",
                  type: "int96",
                },
              ],
              name: "createFlowFromContract",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "contract ISuperToken",
                  name: "token",
                  type: "address",
                },
                {
                  internalType: "int96",
                  name: "flowRate",
                  type: "int96",
                },
              ],
              name: "createFlowIntoContract",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "contract ISuperToken",
                  name: "token",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "receiver",
                  type: "address",
                },
              ],
              name: "deleteFlowFromContract",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "contract ISuperToken",
                  name: "token",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "worker",
                  type: "address",
                },
              ],
              name: "deleteFlowIntoContract",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_account",
                  type: "address",
                },
              ],
              name: "removeAccount",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "contract ISuperToken",
                  name: "token",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "sendLumpSumToContract",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_workerAttester",
                  type: "address",
                },
              ],
              name: "setAttester",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "contract ISuperToken",
                  name: "token",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "receiver",
                  type: "address",
                },
                {
                  internalType: "int96",
                  name: "flowRate",
                  type: "int96",
                },
              ],
              name: "updateFlowFromContract",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "contract ISuperToken",
                  name: "token",
                  type: "address",
                },
                {
                  internalType: "int96",
                  name: "flowRate",
                  type: "int96",
                },
              ],
              name: "updateFlowIntoContract",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "contract ISuperToken",
                  name: "token",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "withdrawFunds",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "workerAttester",
              outputs: [
                {
                  internalType: "contract WorkerAttesterInterface",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
          ],
        },
        WorkerAttester: {
          address: "0xa3B4CF71A6A81cC7c61Ad072A30FFc767ADD5F04",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_defaultCurrency",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_optimisticOracleV3",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "bytes32",
                  name: "dataId",
                  type: "bytes32",
                },
                {
                  indexed: false,
                  internalType: "bytes32",
                  name: "data",
                  type: "bytes32",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "asserter",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "bytes32",
                  name: "assertionId",
                  type: "bytes32",
                },
              ],
              name: "DataAsserted",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "bytes32",
                  name: "dataId",
                  type: "bytes32",
                },
                {
                  indexed: false,
                  internalType: "bytes32",
                  name: "data",
                  type: "bytes32",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "asserter",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "bytes32",
                  name: "assertionId",
                  type: "bytes32",
                },
              ],
              name: "DataAssertionResolved",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "worker",
                  type: "address",
                },
                {
                  internalType: "bytes32",
                  name: "dataId",
                  type: "bytes32",
                },
                {
                  internalType: "bytes32",
                  name: "data",
                  type: "bytes32",
                },
                {
                  internalType: "address",
                  name: "asserter",
                  type: "address",
                },
              ],
              name: "assertDataFor",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "assertionId",
                  type: "bytes32",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "assertedId",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "assertionId",
                  type: "bytes32",
                },
              ],
              name: "assertionDisputedCallback",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "assertionLiveness",
              outputs: [
                {
                  internalType: "uint64",
                  name: "",
                  type: "uint64",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "assertionId",
                  type: "bytes32",
                },
                {
                  internalType: "bool",
                  name: "assertedTruthfully",
                  type: "bool",
                },
              ],
              name: "assertionResolvedCallback",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "assertionsData",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "assertId",
                  type: "bytes32",
                },
                {
                  internalType: "bytes32",
                  name: "data",
                  type: "bytes32",
                },
                {
                  internalType: "address",
                  name: "asserter",
                  type: "address",
                },
                {
                  internalType: "bool",
                  name: "resolved",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "defaultCurrency",
              outputs: [
                {
                  internalType: "contract IERC20",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "defaultIdentifier",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "worker",
                  type: "address",
                },
              ],
              name: "getAssertionResult",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "worker",
                  type: "address",
                },
              ],
              name: "getData",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "oo",
              outputs: [
                {
                  internalType: "contract OptimisticOracleV3Interface",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint64",
                  name: "_period",
                  type: "uint64",
                },
              ],
              name: "setPeriod",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "worker",
                  type: "address",
                },
              ],
              name: "settleAndGetAssertionResult",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
      },
    },
  ],
  80001: [
    {
      name: "polygonMumbai",
      chainId: "80001",
      contracts: {
        SuperBuidl: {
          address: "0x631898710733420cad7ee4d980DF388114Ef156d",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_owner",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [],
              name: "Unauthorized",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "accountList",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_account",
                  type: "address",
                },
              ],
              name: "allowAccount",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_newOwner",
                  type: "address",
                },
              ],
              name: "changeOwner",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "contract ISuperToken",
                  name: "token",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "receiver",
                  type: "address",
                },
                {
                  internalType: "int96",
                  name: "flowRate",
                  type: "int96",
                },
              ],
              name: "createFlowFromContract",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "contract ISuperToken",
                  name: "token",
                  type: "address",
                },
                {
                  internalType: "int96",
                  name: "flowRate",
                  type: "int96",
                },
              ],
              name: "createFlowIntoContract",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "contract ISuperToken",
                  name: "token",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "receiver",
                  type: "address",
                },
              ],
              name: "deleteFlowFromContract",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "contract ISuperToken",
                  name: "token",
                  type: "address",
                },
              ],
              name: "deleteFlowIntoContract",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_account",
                  type: "address",
                },
              ],
              name: "removeAccount",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "contract ISuperToken",
                  name: "token",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "sendLumpSumToContract",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "contract ISuperToken",
                  name: "token",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "receiver",
                  type: "address",
                },
                {
                  internalType: "int96",
                  name: "flowRate",
                  type: "int96",
                },
              ],
              name: "updateFlowFromContract",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "contract ISuperToken",
                  name: "token",
                  type: "address",
                },
                {
                  internalType: "int96",
                  name: "flowRate",
                  type: "int96",
                },
              ],
              name: "updateFlowIntoContract",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "contract ISuperToken",
                  name: "token",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "withdrawFunds",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
      },
    },
  ],
} as const;

export default contracts;
