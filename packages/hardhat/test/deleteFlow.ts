import { MoneyRouter } from "./../typechain-types/contracts/MoneyRouter";
import { Result } from "@ethersproject/abi";
import { expect } from "chai";
import { ethers } from "hardhat";
import { DataAttester } from "../typechain-types";

import { time } from "@nomicfoundation/hardhat-network-helpers";

// const { Framework } = require("@superfluid-finance/sdk-core");

describe.only("deleteFlow", function () {
  // We define a fixture to reuse the same setup in every test.
  const _defaultCurrency = "0xd35cceead182dcee0f148ebac9447da2c4d449c4";
  const _optimisticOracleV3 = "0x9923D42eF695B5dd9911D05Ac944d4cAca3c4EAB";

  let DataAttester: DataAttester;
  let MoneyRouter: MoneyRouter;
  before(async () => {
    const DataAttesterContractFactory = await ethers.getContractFactory("DataAttester");
    DataAttester = (await DataAttesterContractFactory.deploy(_defaultCurrency, _optimisticOracleV3)) as DataAttester;
    await DataAttester.deployed();

    const MoneyRouterContractFactory = await ethers.getContractFactory("MoneyRouter");
    MoneyRouter = (await MoneyRouterContractFactory.deploy(
      ethers.constants.AddressZero,
      DataAttester.address,
    )) as MoneyRouter;
    await DataAttester.deployed();
  });

  describe("Functions", function () {
    it("Should delete flow", async function () {
      const provider = new ethers.providers.JsonRpcProvider(
        "https://goerli.infura.io/v3/ce7426bf07f24fd59a2f7bbb6df217b4",
      );

      const sf = await Framework.create({
        chainId: (await provider.getNetwork()).chainId,
        provider,
      });
      const daix = await sf.loadSuperToken("fDAIx");

      const receiver = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";

      const result = await MoneyRouter.createFlowFromContract(daix.address, receiver, "85802469135802", "43243");
    });
  });
});
