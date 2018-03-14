<template>
  <p>
    {{ greeting }} World!
  </p>  
</template>

<script>
  module.exports = {
    data: function() {
      return {
        greeting: 'Hello',
      }
    }
  }
  var exec = require('child_process').exec;

  // シェル上で実行するコマンド
  var COMMAND = 'echo Hello World';

  exec(COMMAND, function(error, stdout, stderr) {
    // シェル上でコマンドを実行できなかった場合のエラー処理
    if (error !== null) {
      console.log('exec error: ' + error);
      return;
    }

    // シェル上で実行したコマンドの標準出力が stdout に格納されている
    console.log('stdout: ' + stdout);
  });
</script>

<style scoped>
  p {
    font-size: 2em;
    text-align: center;
    color: #2e9afe;
  }
</style>

<template>
  <div id="app">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App!'
    }
  }
}
</script>

<style lang="css">
  #app {
    color: #56b983;
  }
</style>


