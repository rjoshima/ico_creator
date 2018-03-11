pragma solidity ^0.4.18;


import "zeppelin-solidity/contracts/token/StandardToken.sol";


contract DappsToken is StandardToken {

    // string public name = "DappsToken";

    // string public symbol = "DTKN";

    // uint public decimals = 18;

    // function DappsToken(uint initialSupply) public {
    //     totalSupply = initialSupply;
    //     balances[msg.sender] = initialSupply;
    // }

    function DappsToken (
        uint256 _initialAmount,
        string _tokenName,
        uint8 _decimalUnits,
        string _tokenSymbol
        ) {
        balances[msg.sender] = _initialAmount;               // Give the creator all initial tokens
        totalSupply = _initialAmount;                        // Update total supply
        name = _tokenName;                                   // Set the name for display purposes
        decimals = _decimalUnits;                            // Amount of decimals for display purposes
        symbol = _tokenSymbol;                               // Set the symbol for display purposes
    }
}