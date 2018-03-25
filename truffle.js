module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
};


// const HDWalletProvider = require('truffle-hdwallet-provider');

// const providerWithMnemonic = (mnemonic, rpcEndpoint) =>
//   new HDWalletProvider(mnemonic, rpcEndpoint);

// const infuraProvider = network => providerWithMnemonic(
//   process.env.MNEMONIC || '',
//   `https://${network}.infura.io/${process.env.INFURA_API_KEY}`
// );
// const HDWalletProvider = require('truffle-hdwallet-provider');
// const fs = require('fs');
// const accessToken = "インフラアクセストークン; //httpsはいらない。最後のアクセスキーだけいれる。

// // first read in the secrets.json to get our mnemonic
// let secrets;
// let mnemonic = "パスフレーズ";
// if (fs.existsSync('secrets.json')) {
//   secrets = JSON.parse(fs.readFileSync('secrets.json', 'utf8'));
//   mnemonic = secrets.mnemonic;
// } else {
//   console.log('no secrets.json found. You can only deploy to the testrpc.');
//   mnemonic = '';
// }

// module.exports = {
//   networks: {
//     "live": {
//       provider: function() {
//        return new HDWalletProvider(
//          mnemonic,
//          "https://mainnet.infura.io/" + accessToken
//        );
//      },
//     network_id: 1,
//     from: "イーサアドレス",  //自前かuserのetheを入力、自前の場合formにetheアドレス入力欄を設ける
//     gas: 3000000  // Different than the default below　単位はgasです。rogstenでgas料チェック。
//     gasPrice: 10000000000 //Ethereum Developer APIsで自動でpriceを取ってくるようにする 1gway.https://ethstats.net/だと2gweiy 12-27現在 gas料金計算 http://www.tenx-matome.com/entry/ethereum_TXfee
//    },
//     rinkeby: {
//       provider: new HDWalletProvider(mnemonic, 'https://rinkeby.infura.io'),
//       network_id: '*',
//       gas: 4700000,
//       gasPrice: 20000000000,
//     },
//     ropsten: {
//       provider: new HDWalletProvider(mnemonic, 'https://ropsten.infura.io'),
//       network_id: '*',
//       gas: 4700000,
//       gasPrice: 20000000000,
//     },
//   },
// };