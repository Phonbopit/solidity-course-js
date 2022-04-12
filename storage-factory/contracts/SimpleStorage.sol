// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

contract SimpleStorage {
    uint256 number;

    struct People {
        uint256 number;
        string name;
    }

    People[] public people;

    mapping(string => uint256) public nameToNumber;

    function store(uint256 _number) public virtual {
        number = _number;
    }

    function retrieve() public view returns (uint256) {
        return number;
    }

    function addPerson(string memory _name, uint256 _number) public {
        people.push(People(_number, _name));
        nameToNumber[_name] = _number;
    }

    function getNameToNumber(string memory _name)
        public
        view
        returns (uint256)
    {
        return nameToNumber[_name];
    }
}
