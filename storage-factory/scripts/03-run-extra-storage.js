const hre = require("hardhat");

const main = async () => {
  const Contract = await hre.ethers.getContractFactory("ExtraStorage");
  const contract = await Contract.deploy();
  await contract.deployed();

  console.log("Contract deployed to:", contract.address);

  const tx = await contract.store(10);
  tx.wait();

  const number = await contract.retrieve();
  console.log("Number is ", number);
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
