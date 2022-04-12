const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("SimpleStorage", function () {
  let contract;

  before(async () => {
    const SimpleStorage = await ethers.getContractFactory("SimpleStorage");
    contract = await SimpleStorage.deploy();
    await contract.deployed();
  });

  it("should return a new number once it's changed", async () => {
    const NUMBER = 20;
    const tx = await contract.store(NUMBER);
    await tx.wait();

    const number = await contract.retrieve();
    expect(number).to.equal(NUMBER);
  });

  it("should add a person and get number from a name", async () => {
    let name = "Chuck Norris";
    let number = 10;

    const tx = await contract.addPerson(name, number);
    await tx.wait();

    const expected = await contract.getNameToNumber(name);
    expect(expected).to.equal(number);
  });
});
