const hre = require("hardhat");

const main = async () => {
  const Contract = await hre.ethers.getContractFactory("StorageFactory");
  const contract = await Contract.deploy();
  await contract.deployed();

  console.log("Contract deployed to:", contract.address);

  const createTx = await contract.createSimpleStorageContract();
  createTx.wait();

  const storage_0 = await contract.sfGet(0);
  console.log("Storage 0 : ", storage_0);

  const storeTx = await contract.sfStore(0, 20);
  storeTx.wait();

  const storage_0_new = await contract.sfGet(0);
  console.log("Storage 0 (Updated) : ", storage_0_new);
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
