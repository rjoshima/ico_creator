var DappsToken = artifacts.require("./DappsToken.sol");


// ここはinputでformからpostが走ったらnode.jsでtruffle developのshellを実行するようにするか
// module.exports = (deployer) => {
//     const initialSupply = ""
//     const tokenName = ""
//     const decimalUnits = ""
//     const tokenSymbol = ""
//     deployer.deploy(DappsToken, initialSupply, tokenName, decimalUnits, tokenSymbol);
// }

module.exports = (deployer) => {
    const initialSupply = 100
    const tokenName = "firstname"
    const decimalUnits = 18
    const tokenSymbol = "FN"
    deployer.deploy(DappsToken, initialSupply, tokenName, decimalUnits, tokenSymbol);
}
