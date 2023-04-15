import { SuperBuidl } from "./../typechain-types/contracts/SuperBuidl";
import { Result } from "@ethersproject/abi";
import { expect } from "chai";
import { ethers } from "hardhat";
import { WorkerAttester } from "../typechain-types";

import { time } from "@nomicfoundation/hardhat-network-helpers";

// const { Framework } = require("@superfluid-finance/sdk-core");

describe.only("deleteFlow", function () {
  // We define a fixture to reuse the same setup in every test.
  const _defaultCurrency = "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6";
  const _optimisticOracleV3 = "0x9923D42eF695B5dd9911D05Ac944d4cAca3c4EAB";

  let WorkerAttester: WorkerAttester;
  let SuperBuidl: SuperBuidl;
  before(async () => {
    const WorkerAttesterContractFactory = await ethers.getContractFactory("WorkerAttester");
    WorkerAttester = (await WorkerAttesterContractFactory.deploy(
      _defaultCurrency,
      _optimisticOracleV3,
    )) as WorkerAttester;
    await WorkerAttester.deployed();

    const SuperBuidlContractFactory = await ethers.getContractFactory("SuperBuidl");
    SuperBuidl = (await SuperBuidlContractFactory.deploy(
      ethers.constants.AddressZero,
      WorkerAttester.address,
    )) as SuperBuidl;
    await WorkerAttester.deployed();
  });

  describe("Functions", function () {
    it("Should delete flow", async function () {
      expect(await WorkerAttester.assertionLiveness()).to.equal(10);

      await WorkerAttester.setPeriod(2);
      console.log("period: ", (await WorkerAttester.assertionLiveness()).toNumber());

      // TODO: should be dynamic
      const workerAddress = "0xD8fEBA98bc4418290568a9111821dE2dc84E9F3E";
      const jobId = ethers.utils.formatBytes32String("15435");
      // console.log("dataID: ", dataId);

      // TODO: should be signer address
      const asserter = "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266";

      await WorkerAttester.assertDataFor(workerAddress, jobId, ethers.utils.formatBytes32String("test"), asserter);

      await time.increase(10);
      await WorkerAttester.settleAndGetAssertionResult(workerAddress);
      //     "https://goerli.infura.io/v3/ce7426bf07f24fd59a2f7bbb6df217b4",
      //   );

      //   const sf = await Framework.create({
      //     chainId: (await provider.getNetwork()).chainId,
      //     provider,
      //   });
      //   const daix = await sf.loadSuperToken("fDAIx");

      //   const receiver = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";

      //   const result = await SuperBuidl.createFlowFromContract(daix.address, receiver, "85802469135802", "43243");
      // });
    });
  });
});
