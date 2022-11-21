// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

contract ArrayDemo {
    uint256[] nums = [1, 2, 3];

    function getValues() public view returns (uint256[] memory) {
        return nums;
    }

    function addNumber(uint256 num) public {
        nums.push(num);
    }

    function removeAtIndex(uint256 index) public {
        for (uint256 i = index; i < nums.length - 1; i++) {
            nums[i] = nums[i + 1];
        }
        nums.pop();
    }
}
