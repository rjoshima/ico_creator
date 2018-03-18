var DappsToken = artifacts.require("./DappsToken.sol");


// ここはinputでformからpostが走ったらnode.jsでtruffle developのshellを実行するようにするか
// module.exports = (deployer) => {
//     const initialSupply = ""
//     const tokenName = ""
//     const decimalUnits = ""
//     const tokenSymbol = ""
//     deployer.deploy(DappsToken, initialSupply, tokenName, decimalUnits, tokenSymbol);
// }
// デプロイに必要なGasを問い合わせる
// let gasEstimate = web3.eth.estimateGas({data: bytecode});

// のちdeployはweb3ベースで書き換え
module.exports = (deployer) => {
    const initialSupply = 100
    const tokenName = "hogename"
    const decimalUnits = 18
    const tokenSymbol = "HN"
    deployer.deploy(DappsToken, initialSupply, tokenName, decimalUnits, tokenSymbol);
}
