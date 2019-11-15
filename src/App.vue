<template>
  <div id='app'>
    <Header />
    <div id='lower-container'>
      <Form 
        :definitions='this.definitions'
        :partsOfSpeech='this.partsOfSpeech'
        :mainWords='this.mainWords'
        :suggestions='this.suggestions'
        @find-synonyms='findSynonyms'
        @switch-synonyms='switchSynonyms'
        :error='this.error'
        ref='search'
        />
      <ListOutput 
        :currentSynonyms='this.currentSynonyms'
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
      currentSynonyms: [],
      definitions: [],
      partsOfSpeech: [],
      mainWords: [],
      suggestions: [],
      error: '',
    }
  },
  methods: {
    findSynonyms: async function(e) {
      try { 
        const rawResponse = await getSynonyms(e);
        console.log('rawResponse :', rawResponse);
        if (rawResponse.every(response => typeof (response) === 'string')) {
          this.handleSuggestions(rawResponse);
        } else {
        const mainWords = rawResponse.map(entry => entry.meta.id);
        const definitions = rawResponse.map(entry => entry.shortdef[0]);
        const partsOfSpeech = rawResponse.map(entry => entry.fl);
        const synonyms = rawResponse.map(entry => entry.meta.syns[0]);
        this.handleResponse(mainWords, definitions, partsOfSpeech, synonyms);
        this.$refs.search.$el[0].focus();
        }
      } catch ({ message }) {
        if (message === 'Sorry, we couldn\'t find the word you were looking for! Please enter a new word.' || 
        message === 'Sorry, we couldn\'t find the word you were looking for! Did you mean: ') {
        this.handleError(message);
        this.$refs.search.$el[0].focus();
        }
      } 
    },
    handleResponse: function(mainWords, definitions, partsOfSpeech, synonyms) {
      this.mainWords = mainWords;
      this.definitions = definitions;
      this.partsOfSpeech = partsOfSpeech;
      this.synonyms = synonyms;
      this.currentSynonyms = synonyms[0];
      this.error = '';
    },
    handleError: function(message) {
      this.mainWords = [];
      this.definitions = [];
      this.partsOfSpeech = [];
      this.synonyms = [];
      this.currentSynonyms = [];
      this.error = message;
    },
    switchSynonyms: function(e) {
      this.currentSynonyms = this.synonyms[e]
    },
    handleSuggestions: function(suggestions) {
      this.mainWords = [];
      this.definitions = [];
      this.partsOfSpeech = [];
      this.synonyms = [];
      this.currentSynonyms = [];
      this.suggestions = suggestions
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
