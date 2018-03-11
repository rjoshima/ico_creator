var DappsToken = artifacts.require("./DappsToken.sol");

module.exports = function (deployer) {
    var initialSupply = 1000;
    var initialAmount = 1000;
    var tokenName = "first token";
    var decimalUnits = 18;
    var tokenSymbol = "FT";
    deployer.deploy(DappsToken, initialSupply);
}