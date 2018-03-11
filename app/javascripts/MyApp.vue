<template>
  <form>
    <input type="name" placeholder="name" />
    <input type="total" placeholder="total" />
    <button type="submit" @click="exec">submit</button>
  </form>
</template>

<style>
</style>

<script>
export default {
  name: 'HelloWorld',
  methods: {
    exec: function () {
      // 本来はajax通信をする
      console.log('exec')
    }
  }
}
</script>