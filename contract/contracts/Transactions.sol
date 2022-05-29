//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Transaction {
    uint256 transactionCount;

    event transfer(address from, address receiver, uint amount, string message, uint256 timestamp, string keyword);

    struct transferStruct{
        address sender;
        address receiver;
        uint amount;
        string message;
        uint256 timestamp;
        string  keyword;
    }
    transferStruct[] transactions;

    function addToBlock (address payable receiver,  uint amount, string memory message, string memory keyword) public {
       transactionCount+=1;

        transactions.push(transferStruct(msg.sender, receiver, amount, message, block.timestamp,keyword));
    }
    function getAllTransactions()public view returns(transferStruct[] memory){
        return transactions;
    }
    function getTransactionCount()public view returns(uint256 ){
        return transactionCount;
    }

}