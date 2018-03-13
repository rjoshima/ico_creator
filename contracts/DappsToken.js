var DappsToken = artifacts.require("./DappsToken.sol");


// ここはinputでformからpostが走ったらnode.jsでtruffle developのshellを実行するようにするか
module.exports = (deployer) => {
    const initialSupply = ""
    const tokenName = ""
    const decimalUnits = ""
    const tokenSymbol = ""
    deployer.deploy(DappsToken, initialSupply, tokenName, decimalUnits, tokenSymbol);
}