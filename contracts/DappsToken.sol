pragma solidity ^0.4.18;
import "zeppelin-solidity/contracts/token/StandardToken.sol";

contract DappsToken is StandardToken {

  function DappsToken(uint256 _initialAmount, string _tokenName, uint8 _decimalUnits, string _tokenSymbol) public {
       balances[msg.sender] = _initialAmount;               // Give the creator all initial tokens
       totalSupply = _initialAmount;                        // Update total supply
       name = _tokenName;                                   // Set the name for display purposes
       decimals = _decimalUnits;                            // Amount of decimals for display purposes
       symbol = _tokenSymbol;    
  }
}
