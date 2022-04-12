const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("StorageFactory", function () {
  let contract;

  before(async () => {
    const StorageFactory = await ethers.getContractFactory("StorageFactory");
    contract = await StorageFactory.deploy();
    await contract.deployed();
  });

  it("should set a a number with sfStore", async () => {
    const createTx = await contract.createSimpleStorageContract();
    createTx.wait();

    const storeTx = await contract.sfStore(0, 20);
    storeTx.wait();

    const result = await contract.sfGet(0);
    expect(result).to.equal(20);
  });
});
