const fs = require('fs');
const solc = require('solc');
const Web3 = require('web3');

// web3の初期化
web3 = new Web3();
// プライベートネットワークと接続
if (!web3.currentProvider) {
    web3.setProvider(new web3.providers.HttpProvider("http://localhost:8545"));
}else{
    console.log("error");
    exit;
}
web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));
web3.eth.defaultAccount=web3.eth.accounts[0];

// Compile the source code
// const input = fs.readFileSync('./contracts/DappsToken.sol', 'utf8');
// ↓これを使わずに、build以下のコンパイル先から読み込む
const input = JSON.parse(fs.readFileSync('./build/contracts/DappsToken.json', 'utf8'));
// const output = solc.compile(input, 1);
// console.log(input["abi"]);
const abi = input["abi"]
const bytecode = input["bytcode"]
// const abi = output.contracts[':DappsToken'].interface;
// const bytecode = "0x" + output.contracts['DappsToken'].bytecode;
// const abi = JSON.parse(output.contracts['DappsToken'].interface);

// Contract object
const contract = web3.eth.contract(abi);
web3.eth.defaultAccount=web3.eth.accounts[0];

const initialSupply = 100
const tokenName = "hogename"
const decimalUnits = 18
const tokenSymbol = "HN"

// Deploy contract instance
const contractInstance = contract.new(initialSupply, tokenName, decimalUnits, tokenSymbol, {
    // data: '0x' + bytecode,
    data: bytecode,
    from: web3.eth.coinbase,
    gas: 90000*2
}, (err, res) => {
    if (err) {
        console.log(err);
        return;
    }

    // Log the tx, you can explore status with eth.getTransaction()
    console.log(res.transactionHash);

    // If we have an address property, the contract was deployed
    if (res.address) {
        console.log('Contract address: ' + res.address);
        // Let's test the deployed contract
        testContract(res.address);
    }
});

// Quick test the contract

function testContract(address) {
    // Reference to the deployed contract
    const token = contract.at(address);
    // Destination account for test
    const dest_account = '0x002D61B362ead60A632c0e6B43fCff4A7a259285';

    // Assert initial account balance, should be 100000
    const balance1 = token.balances.call(web3.eth.coinbase);
    console.log(balance1 == 1000000);

    // Call the transfer function
    token.transfer(dest_account, 100, {from: web3.eth.coinbase}, (err, res) => {
        // Log transaction, in case you want to explore
        console.log('tx: ' + res);
        // Assert destination account balance, should be 100 
        const balance2 = token.balances.call(dest_account);
        console.log(balance2 == 100);
    });
}
