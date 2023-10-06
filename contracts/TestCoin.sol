// SPDX-License-Identifier: MIT

pragma solidity ^0.5.2;

import "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";

contract TestCoin is ERC20 {
    string public name = "Test";
    string public symbol = "TST";
    uint8 public decimals = 6;
    uint public INITIAL_SUPPLY = 10000000000000000;

    constructor() public {
	_mint(msg.sender, INITIAL_SUPPLY);
    }
}