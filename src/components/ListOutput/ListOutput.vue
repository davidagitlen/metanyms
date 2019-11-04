<template>
  <div id='synonym-list' v-if='this.synonyms.length > 0'>
    <ul>
      <li 
      v-for='(synonym, index) in this.synonyms' 
      v-bind:key='index'
      @click.prevent = 'findSynonyms(synonym)'>{{synonym}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'listoutput',
  props: ['synonyms', 'findSynonyms']
}
</script>

<style scoped>
  ul {
    margin: 25px 0px 0px 35px;
    width: max-content;
  }
  li {
    margin: 10px 0px 0px 10px;
  }
  li:hover {
    color: #3030FF;
    font-style: italic; 
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }
  #synonym-list {
    min-height: 80vh;
    max-height: max-content;
    width: 70%;
    font-size: 1.5em;
  }
</style>