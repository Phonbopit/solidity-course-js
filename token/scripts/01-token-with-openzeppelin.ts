import { ethers } from 'hardhat';

async function main() {
  const ContractFactory = await ethers.getContractFactory('AhoyToken');
  const ahoy = await ContractFactory.deploy(100_000_000);

  const [deployer, wallet1, wallet2] = await ethers.getSigners();

  await ahoy.deployed();

  console.log('Contract deployed to:', ahoy.address);
  const totalSupply = await ahoy.totalSupply();
  console.log('totalSupply : ', ethers.utils.formatEther(totalSupply));

  await ahoy.transfer(wallet1.address, 100);
  const balance = await ahoy.balanceOf(wallet1.address);
  console.log('balance', balance);
  console.log('balandOf(owner)', await ahoy.balanceOf(deployer.address));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
