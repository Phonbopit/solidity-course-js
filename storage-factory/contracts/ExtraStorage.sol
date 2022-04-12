// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

import "./SimpleStorage.sol";

contract ExtraStorage is SimpleStorage {
    function store(uint256 _favoriteNumber) public virtual override {
        // number field in SimpleStorage.
        number = _favoriteNumber + 5;
    }
}
