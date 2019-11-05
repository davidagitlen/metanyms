<template>
  <div id='app'>
    <Header />
    <div id='lower-container'>
      <Form 
        :definition='this.definition'
        :partOfSpeech='this.partOfSpeech'
        :mainWord='this.mainWord'
        @find-synonyms='findSynonyms'
        :error='this.error'
        />
      <ListOutput 
        :synonyms='this.synonyms'
        @find-synonyms='findSynonyms'
        />
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
      synonyms: [],
      definition: '',
      partOfSpeech: '',
      mainWord: '',
      error: '',
    }
  },
  methods: {
    findSynonyms: async function(e) {
      try { 
        const rawResponse = await getSynonyms(e);
        const mainWord = rawResponse.meta.id;
        const definition = rawResponse.shortdef[0];
        const partOfSpeech = rawResponse.fl;
        const synonyms = rawResponse.meta.syns[0];
        this.handleResponse(mainWord, definition, partOfSpeech, synonyms);
      } catch ({ message }) {
        this.handleError(message);
      } 
    },
    handleResponse: function(mainWord, definition, partOfSpeech, synonyms) {
      this.mainWord = mainWord;
      this.definition = definition;
      this.partOfSpeech = partOfSpeech;
      this.synonyms = synonyms;
      this.error = '';
    },
    handleError: function(message) {
      console.log(message)
      this.mainWord = '';
      this.definition = '';
      this.partOfSpeech = '';
      this.synonyms = '';
      this.error = message;
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
  min-height: 100vh;
  max-height: max-content;
}
#lower-container {
  display: flex;
  flex-direction: row;
}
</style>
