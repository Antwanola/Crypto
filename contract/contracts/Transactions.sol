//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;



contract Transactions {
    uint256 transactionCount;

    event Transfer(address from, address reciever, uint amount, string message, uint256 timestamp, string keyword ); 

    struct transfer {
        address sender;
        address receiver;
        uint amount;
        string message;
        uint256 timestamp;
        string keyword;
    }

    transfer[] _transactions;

    function addToBlock (address payable receiver, uint amount, string memory message, uint256 timestamp, string memory keyword) public {
        transactionCount+=1;
        _transactions.push(transfer(msg.sender, receiver, amount, message, block.timestamp,  keyword));

        emit Transfer(msg.sender, receiver, amount, message, block.timestamp, keyword);

    }
    function getAllTransactions () public view returns(transfer[] memory) {
       return _transactions;

    }
    function getTransactionCount () public view returns(uint256) {
        return transactionCount;
       

    }


}