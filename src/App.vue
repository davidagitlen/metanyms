<template>
  <div id='app'>
    <Header />
    <div id='lower-container'>
      <Form 
        :findSynonyms='findSynonyms'/>
      <ListOutput 
        :synonyms='this.synonyms'/>
    </div>
  </div>
</template>

<script>
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import ListOutput from './components/ListOutput/ListOutput';
import { getSynonyms } from '../util/apiCalls';
export default {
  name: 'app',
  components: {
    Header,
    Form,
    ListOutput
  },
  data() {
    return {
      synonyms: []
    }
  },
  methods: {
    findSynonyms: async function(word) {
      const rawResponse = await getSynonyms(word);
      const synonyms = rawResponse.syns[0];
      this.synonyms = synonyms
    }
  },
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
