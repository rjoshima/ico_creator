executeFunction: function() {
    //for now, just collect arguments in order.
    //otherwise do something else (like passing a function as a prop)
    var args = [];
    for(var i = 0; i < this.props.inputs.length; i+=1) {
      args.push(this.refs[this.props.inputs[i].ref].state.val);
    }

    //if in creation page
    if(typeof this.props.web3_token == 'undefined') {
      //token creation execution
      console.log('creating');
      var ST = web3.eth.contract(HumanStandardToken.abi);
      var tx_hash = null;
      var that = this;

      web3.eth.getAccounts(function(err, accounts){
        var addr = accounts[0];
        //TODO: change gas price to be dynamic. Included quicker into a block.
        //args[0] = uint256 _initialAmount,
        //args[1] = string _tokenName,
        //args[2] = uint8 _decimalUnits,
        //args[3] = string _tokenSymbol
        //var creation_data = ST.new.getData(args[0], args[1], args[2], args[3], {from: addr, data: "0x" + HumanStandardToken.prototype.binary, gasPrice: 50000000000, gas: 3100000});

        ST.new(args[0], args[1], args[2], args[3], {from: addr, data: HumanStandardToken.prototype.binary, gasPrice: 20000000000, gas: 1000000}, function(err, result) {
          //NOTE: This callback fires twice. Once tx hash comes in. Then when mined.
          if(err) {
            console.log(err);
          } else {
            if(result != null) {
              if(!result.address) {
                console.log("submitting");
                tx_hash = result;
                console.log(tx_hash);
                that.submitTransaction(tx_hash.transactionHash, that.props.txType);
              }
            }
          }
        });
      });


    } else {}
}
