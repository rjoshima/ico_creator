pragma solidity ^0.4.18;

import "zeppelin-solidity/contracts/token/ERC20/StandardToken.sol";

contract DappsToken is StandardToken {

    uint256 public totalSupply;
    string public name;
    uint8 public decimals;
    string public symbol;

// コンストラクタ
  function DappsToken(uint256 _initialAmount, string _tokenName, uint8 _decimalUnits, string _tokenSymbol) public {
       balances[msg.sender] = _initialAmount;             
       totalSupply = _initialAmount;                    
       name = _tokenName;                               
       decimals = _decimalUnits;                         
       symbol = _tokenSymbol;    
  }
}