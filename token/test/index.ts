import { expect } from 'chai';
import { ethers } from 'hardhat';
const { utils } = ethers;

describe('Greeter', function () {
  describe('Transactions', function () {
    it('should transfer tokens between accounts', async function () {
      const [owner, wallet1, wallet2] = await ethers.getSigners();

      const Token = await ethers.getContractFactory('AhoyToken');

      const ahoyToken = await Token.deploy(100_000_000);

      // Transfer 100 AHOY to wallet1
      await ahoyToken.transfer(wallet1.address, utils.parseEther('100'));
      expect(await ahoyToken.balanceOf(wallet1.address)).to.equal(
        utils.parseEther('100')
      );

      // Transfer 200 AHOY to wallet2
      await ahoyToken.transfer(wallet2.address, utils.parseEther('200'));
      expect(await ahoyToken.balanceOf(wallet2.address)).to.equal(
        utils.parseEther('200')
      );

      // Wallet2 transfer 100 AHOY back to wallet1
      await ahoyToken
        .connect(wallet2)
        .transfer(wallet1.address, utils.parseEther('100'));
      expect(await ahoyToken.balanceOf(wallet2.address)).to.equal(
        utils.parseEther('100')
      );
      expect(await ahoyToken.balanceOf(wallet1.address)).to.equal(
        utils.parseEther('200')
      );

      expect(await ahoyToken.balanceOf(owner.address)).to.equal(
        ethers.utils.parseEther('99999700')
      );
    });
  });
});
