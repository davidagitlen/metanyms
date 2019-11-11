<template>
    <form id='synonym-form'>
      <div>
        <input
          placeholder='Enter a Word Here!'
          v-model='word'
          @keyup.enter.prevent="findWord(word)"
          >
        <button
          @click.prevent="findWord(word)"
          >
          Search
        </button>
      </div>
      <div 
        id='error-message'
        v-if='this.error !== undefined && this.error.length > 0'>
        <p>{{error}}</p>
      </div>
      <div 
        id='definition-display'
        v-if='this.definition !== undefined && this.definition.length > 0'
        >
        <p>
          <span id='main-word'>{{this.mainWord}}</span>:
          ( <span id='part-of-speech'>{{this.partOfSpeech}}</span> )
          <span id='definition'>{{this.definition}}</span>
        </p>
      </div>
    </form>
</template>

<script>
export default {
  name: 'synonym-form',
  props: ['definition', 'partOfSpeech', 'mainWord', 'error'],
  data() {
    return {
      word: ''
    }
  },
  methods: {
    findWord(word) {
      this.$emit('find-synonyms', word);
      this.word = ''
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
    box-shadow: 3px 1px 10px #00FFE1, -3px -1px 10px #00FFE1;
  }
  button {
    height: 32px;
    width: 110px;
    border: none;
    border-radius: 20px;
    margin: 0px 0px 0px 10px;
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
   box-shadow: 3px 1px 10px #00FFE1, -3px -1px 10px #00FFE1;
  }
  p {
    margin: 20px 10px 0px 0px;
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