const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("ExtraStorage", function () {
  let contract;

  before(async () => {
    const ExtraStorage = await ethers.getContractFactory("ExtraStorage");
    contract = await ExtraStorage.deploy();
    await contract.deployed();
  });

  it("should call store and plus number + 5", async () => {
    const tx = await contract.store(10);
    tx.wait();

    const number = await contract.retrieve();
    expect(number).to.equal(15);
  });
});
