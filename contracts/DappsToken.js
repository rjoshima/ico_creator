var DappsToken = artifacts.require("./DappsToken.sol");

module.exports = function (deployer) {
    const initialSupply = ""
    const tokenName = ""
    const decimalUnits = ""
    const tokenSymbol = ""
    deployer.deploy(DappsToken, initialSupply, tokenName, decimalUnits, tokenSymbol);
}