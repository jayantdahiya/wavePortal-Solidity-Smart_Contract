pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract WavePortal {
    uint256 totalVotes;
    uint256 noSelection;
    uint256 candidate1;
    uint256 candidate2;
    uint256 candidate3;

    constructor() {
        console.log("This is a smart contract based voting system");
    }

    function voteNone() public {
        noSelection += 1;
        totalVotes += 1;
    }

    function voteCandidate1() public {
        candidate1 += 1;
        totalVotes += 1;
    }

    function voteCandidate2() public {
        candidate2 += 1;
        totalVotes += 1;
    }

    function voteCandidate3() public {
        candidate3 += 1;
        totalVotes += 1;
    }

    
    function getTotalVotes() public view returns (uint256) {
        console.log("The total vote counts of the candidates are:");
        console.log("Total Votes for Candidate 1:", candidate1);
        console.log("Total Votes for Candidate 2:", candidate2);
        console.log("Total Votes for Candidate 3:", candidate3);
        console.log("Total Votes for None of the candidates:", noSelection);

        return totalVotes;
    }
}

// SPDX-License-Identifier: UNLICENSED

