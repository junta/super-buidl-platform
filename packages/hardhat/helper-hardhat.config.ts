export interface networkConfigItem {
  superHostAddress: `0x${string}`;
}

export interface networkConfigInfo {
  [key: string]: networkConfigItem;
}

const networkConfig: networkConfigInfo = {
  5: {
    superHostAddress: "0x22ff293e14F1EC3A09B137e9e06084AFd63adDF9",
  },
};

export { networkConfig };
