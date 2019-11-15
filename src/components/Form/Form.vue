<template>
    <form id='synonym-form'>
      <div>
        <input
          placeholder='Enter a Word Here!'
          v-model='word'
          @keyup.enter.prevent='findWord(word)'
          >
        <button
          @click.prevent='findWord(word)'
          >
          Search
        </button>
      </div>
      <div 
        id='error-message'
        v-if='this.error !== undefined && this.error.length > 0'>
        <p>{{error}}</p>
      </div>
      <template 
        id='definition-display'
        v-if='this.definitions !== undefined && this.definitions.length > 0'
        >
        <p
          id='definition-entry'
          v-for='(mainWord, index) in this.mainWords'
          :key='index'
          @click.prevent='switchSynonyms(index)'
          @keyup.enter.prevent='switchSynonyms(index)'
          tabindex='0'
          >
          <span id='main-word'>{{mainWord}}</span>:
          ( <span id='part-of-speech'>{{partsOfSpeech[index]}}</span> )
          <span id='definition'>{{definitions[index]}}</span>
        </p>
      </template>
      <template
        id='suggestions'
        v-if='this.suggestions !==undefined && this.suggestions.length > 0'
        >
        <p
          id='suggestion'
          v-for='(suggestion, index) in this.suggestions'
          :key='index + suggestion'
          @click.prevent='findWord(suggestion)'
          @keyup.enter.prevent='findWord(suggestion)'
          tabindex='0'
          >
          {{ suggestion }}
        </p>
      </template>
    </form>
</template>

<script>
export default {
  name: 'synonym-form',
  props: ['definitions', 'partsOfSpeech', 'mainWords', 'suggestions', 'error'],
  data() {
    return {
      word: ''
    }
  },
  methods: {
    findWord(word) {
      this.$emit('find-synonyms', word);
      this.word = ''
    },
    switchSynonyms(index) {
      this.$emit('switch-synonyms', index);
    }
  }
}
</script>

<style scoped>
  input {
    height: 30px;
    width: 200px;
    border: .5px solid gainsboro;
    border-radius: 3px;
    padding: 0px 0px 0px 10px;
  }
  input:focus {
    box-shadow: 0px 0px 10px #00FFE1, 0px 0px 10px #00FFE1;
  }
  button {
    height: 32px;
    width: 110px;
    border: none;
    border-radius: 20px;
    margin: 0px 0px 0px 30px;
    background-color: #3030FF;
    transition: all 0.3s ease-in-out; 
    font-weight: bold;
    color: white;
  }
  button:hover {
    background-color: #3DF4DF;
    color: #3030FF;
  }
  button:focus {
    box-shadow: 0px 0px 10px #00FFE1, 0px 0px 10px#00FFE1;
  }
  p {
    margin: 20px 10px 0px 0px;
  }
  #definition-entry:hover,
  #suggestion:hover {
    color: #3030FF;
  }
  #definition-entry:focus,
  #suggestion:hover  {
    color: #3030FF;
  }
  #suggestion {
    font-weight: bold;
    margin: 20px 0px 0px 25px;
  } 
  #synonym-form {
    display: flex;
    flex-direction: column;
    min-height: 80vh;
    max-height: max-content;
    width: 30%;
    border-right: 1px solid gainsboro;
    margin: 35px 0px 0px 35px;
  }
  #main-word {
    font-weight: bold;
  }
  #part-of-speech {
    font-style: italic;
  }
  #error-message {
    color: red;
  }
</style>