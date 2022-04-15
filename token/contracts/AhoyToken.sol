// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract AhoyToken is ERC20 {
    constructor(uint256 totalSupply) ERC20("AhoyToken", "AHOY") {
        _mint(msg.sender, totalSupply * 10**decimals());
    }
}
