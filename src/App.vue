<template>
  <div id="app">
    <Header />
    <Form />
  </div>
</template>

<script>
import Header from './components/Header'
import Form from './components/Form'
export default {
  name: 'app',
  components: {
    Header,
    Form
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #FCFCFC;
  height: 100vh;
}
</style>
