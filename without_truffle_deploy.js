// 必要なパッケージをインポート
const fs = require("fs");
const solc = require('solc');
const Web3 = require('web3');

// web3の初期化
web3 = new Web3();
// プライベートネットワークと接続
if (!web3.currentProvider) {
    web3.setProvider(new web3.providers.HttpProvider("http://localhost:8545"));
}
// contractソースをファイルから読み込み
// ここは、ソースを文字列として読み込んでいるだけです。
let source = fs.readFileSync('contracts/DappsToken.sol', 'utf8');
// コンパイル
let compiledContract = solc.compile(source, 1);
// ABIを取得(配列のキーはなぜか頭に:が必要でした)
let abi = compiledContract.contracts[':DappsToken'].interface;
// コントラクトのバイトコードの取得(頭に0xを付けないと後述のAPIで弾かれる)
let bytecode = "0x" + compiledContract.contracts[':DappsToken'].bytecode;
// デプロイに必要なGasを問い合わせる
let gasEstimate = web3.eth.estimateGas({data: bytecode});
// コントラクトオブジェクトの生成
let TestContract = web3.eth.contract(JSON.parse(abi));
// デプロイアカウントのLockを外す
web3.personal.unlockAccount(web3.eth.accounts[0], "/Users/username/Library/Ethereum/geth.ipc");
// ネットワークにデプロイ
// コンストラクタがある場合は、ハッシュの前の引数にコンストラクタのパラメタを渡すことで初期化可能
TestContract.new({from: web3.eth.accounts[0], data:bytecode, gas:gasEstimate });