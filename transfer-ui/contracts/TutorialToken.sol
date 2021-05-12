// SPDX-License-Identifier: MIT
pragma solidity >=0.5.0 <0.7.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TutorialToken is ERC20 {
    // string public name = "DeepVerseToken";
    // string public symbol = "DV";
    uint8 public DECIMALS = 0;
    uint256 public INITIAL_SUPPLY = 12000;

    constructor() public ERC20("DeepVerse", "DV") {
        _mint(msg.sender, INITIAL_SUPPLY);
        _setupDecimals(DECIMALS);
    }

}