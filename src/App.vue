<template>
  <div id='app'>
    <Header />
    <div id='lower-container'>
      <Form />
      <ListOutput />
    </div>
  </div>
</template>

<script>
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import ListOutput from './components/ListOutput/ListOutput';
export default {
  name: 'app',
  components: {
    Header,
    Form,
    ListOutput
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
#lower-container {
  display: flex;
  flex-direction: row;
}
</style>
