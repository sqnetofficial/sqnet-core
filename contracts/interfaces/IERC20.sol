// SPDX-License-Identifier: MIT
// Developped by SQNet

pragma solidity ^0.8.10;

interface IERC20 {

	function name() external view returns (string memory);

	function symbol() external view returns (string memory);
	
	function decimals() external view returns (uint8);
	
	function maxSupply() external view returns (uint256);
	
	function totalSupply() external view returns (uint256);
	
	function totalBurned() external view returns (uint256);
	
	function totalFees() external view returns (uint256);
	
	function balanceOf(address account) external view returns (uint256);
	
	function allowance(address owner, address spender) external view returns (uint256);

	function approve(address spender, uint256 amount) external returns (bool);

	function transfer(address recipient, uint256 amount) external returns (bool);

	function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);

	function groupTransfer(address[] memory recipents, uint256[] memory amounts) external returns (bool);

	function airDrop (address[] memory recipents, uint256 amount) external returns (bool);

	function exemptFees(address account) external returns (bool);

	function feesExemptedAccounts() external view returns (address[] memory);
}