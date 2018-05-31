<template>
  <div id="app">
    <h1>{{ filename }}</h1>
    <h2>{{ file() }}</h2>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      filename: 'Main'
    }
  },
  methods:{
    file: function(){
      return 'Anurag Kumar';
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
/style>
