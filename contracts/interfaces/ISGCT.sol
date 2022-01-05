// SPDX-License-Identifier: MIT
// Developped by SQNet

pragma solidity ^0.8.10;

import "./IERC20.sol";

interface ISGCT is IERC20 {
	function groupTransfer(address[] memory recipents, uint256[] memory amounts) external returns (bool);

	function airDrop (address[] memory recipents, uint256 amount) external returns (bool);

	function exemptFees(address account) external returns (bool);

	function feesExemptedAccounts() external view returns (address[] memory);
}