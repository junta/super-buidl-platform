import { Result } from "@ethersproject/abi";
import { expect } from "chai";
import { ethers } from "hardhat";
import { DataAttester } from "../typechain-types";

import { time } from "@nomicfoundation/hardhat-network-helpers";

describe("DataAttester", function () {
  // We define a fixture to reuse the same setup in every test.
  const _defaultCurrency = "0xd35cceead182dcee0f148ebac9447da2c4d449c4";
  const _optimisticOracleV3 = "0x9923D42eF695B5dd9911D05Ac944d4cAca3c4EAB";

  let DataAttester: DataAttester;
  before(async () => {
    const yourContractFactory = await ethers.getContractFactory("DataAttester");
    DataAttester = (await yourContractFactory.deploy(_defaultCurrency, _optimisticOracleV3)) as DataAttester;
    await DataAttester.deployed();
  });

  describe("Deployment", function () {
    it("Should have the right assertionLiveness", async function () {
      // expect(await DataAttester.assertionLiveness()).to.equal(7200);
    });

    it("Should assert data for", async function () {
      const dataId = ethers.utils.formatBytes32String("15435");
      // console.log("dataID: ", dataId);
      const data = ethers.utils.formatBytes32String("workere A has stopped working");
      const asserter = "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266";
      const tx = await DataAttester.assertDataFor(dataId, data, asserter);
      await tx.wait();
      // console.log(result.logs.at(0));
      // console.log(result.logs.at(1));
      // console.log(result.logs.at(2));

      const id = await DataAttester.assertedId();
      console.log(id);

      await time.increase(3600);

      const settleAndGetAssertionResult = await DataAttester.settleAndGetAssertionResult(dataId);
      console.log(settleAndGetAssertionResult);

      const assertResult = await DataAttester.getAssertionResult(dataId);

      // const assertResult = await DataAttester.getAssertionResult();
      console.log(assertResult);

      // const resultData = await DataAttester.getAssertData();

      // const resultData = await DataAttester.getData(dataId);
      // console.log(resultData);
    });
  });
});
