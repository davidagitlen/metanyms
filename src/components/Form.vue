<template>
  <form id='form'>
    <div>
      <input
        placeholder="Enter a Word Here!"
        @keyup.enter.prevent>
      <button
        @click.prevent>
        Search
      </button>
    </div>
  </form>
</template>

<script>
import { getSynonyms } from '../../util/apiCalls';
export default {
  methods: {
    findSynonyms: async (word) => {
      const rawResponse = await getSynonyms(word);
      const synonyms = rawResponse.syns;
      return synonyms
    }
  }
}
</script>

<style scoped>
  input {
    height: 30px;
    width: 200px;
    border: .5px solid gray;
    border-radius: 2.5px;
  }
  button {
    height: 35px;
    width: 110px;
    border: none;
    border-radius: 15px;
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
  #form {
    display: flex;
    flex-direction: column;
    margin: 35px 0px 0px 35px;
  }
</style>