// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract KlardaExchangeTracker_BSC {

    function getExchangeBalance(
        address[] memory _userAddress, 
        address _tokenAddress
    ) public view returns(uint256 _amount) {
        for (uint i = 0; i <_userAddress.length; i++) {
            _amount += IERC20(_tokenAddress).balanceOf(_userAddress[i]);
        }
    } 
}