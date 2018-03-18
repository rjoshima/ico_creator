module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
};



// var HDWalletProvider = require("truffle-hdwallet-provider");
// var mnemonic = "パスフレーズ";
// var accessToken = "インフラアクセストークン; //httpsはいらない。最後のアクセスキーだけいれる。
 
 
// module.exports = {
//   networks: {
//     "live": {
//        provider: function() {
//         return new HDWalletProvider(
//           mnemonic,
//           "https://mainnet.infura.io/" + accessToken
//         );
//       },
//     network_id: 1,
//     from: "イーサアドレス",  //自前かuserのetheを入力、自前の場合formにetheアドレス入力欄を設ける
//     gas: 3000000  // Different than the default below　単位はgasです。rogstenでgas料チェック。
//     gasPrice: 10000000000 //Ethereum Developer APIsで自動でpriceを取ってくるようにする 1gway.https://ethstats.net/だと2gweiy 12-27現在 gas料金計算 http://www.tenx-matome.com/entry/ethereum_TXfee
//     }
//   },
//   rpc: {
//     host: "localhost",
//     port: 8545
//   }
// }