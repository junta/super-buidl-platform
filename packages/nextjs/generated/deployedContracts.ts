const contracts = {
  5: [
    {
      name: "goerli",
      chainId: "5",
      contracts: {
        Buidlx: {
          address: "0xe535CFb4B9f0eaEcF48A3Df684b566AA475434B0",
          abi: [
            {
              inputs: [],
              name: "Initialized",
              type: "error",
            },
            {
              inputs: [],
              name: "ZeroAddress",
              type: "error",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              stateMutability: "payable",
              type: "fallback",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "factory",
                  type: "address",
                },
                {
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "symbol",
                  type: "string",
                },
              ],
              name: "initialize",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "initialAddress",
                  type: "address",
                },
              ],
              name: "initializeProxy",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "receiver",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "userData",
                  type: "bytes",
                },
              ],
              name: "mint",
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
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              stateMutability: "payable",
              type: "receive",
            },
          ],
        },
        SuperBuidl: {
          address: "0x532fbC54271B05fd22A5eEeA1Ce9b5ef7ee3Eb13",
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
  80001: [
    {
      name: "polygonMumbai",
      chainId: "80001",
      contracts: {
        SuperBuidl: {
          address: "0xF5432f93822F049F600B0539714d2Ed7BAA32f56",
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
