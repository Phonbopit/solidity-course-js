import { ethers } from "hardhat";

async function main() {
  const ContractFactory = await ethers.getContractFactory("AhoyToken");
  const ahoy = await ContractFactory.deploy(100_000_000);

  await ahoy.deployed();

  console.log("Contract deployed to:", ahoy.address);
  const totalSupply = await ahoy.totalSupply();
  console.log("totalSupply : ", ethers.utils.formatEther(totalSupply));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
