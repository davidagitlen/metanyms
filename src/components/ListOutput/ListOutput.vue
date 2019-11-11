<template>
  <div 
    id='synonym-list' 
    v-if='this.synonyms != undefined && this.synonyms.length > 0'>
    <ul>
      <li 
      v-for='(synonym, index) in this.synonyms' 
      v-bind:key='index'
      @click.prevent="findWord($event, synonym)"
      @keyup.enter.prevent="findWord($event, synonym)"
      tabindex='0'
      >{{synonym}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'listoutput',
  props: ['synonyms'],
  methods: {
    findWord(event, word) {
      this.$emit('find-synonyms', word);
      this.word = ''
      event.target.blur();
    }
  }
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
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-shadow: 0px 0px 10px #00FFE1, 0px 0px 10px #00FFE1;
  }
  li:focus {
    color: #3030FF;
    transition: all 0.2s ease-in-out;
    text-shadow: 0px 0px 10px #00FFE1, 0px 0px 10px #00FFE1;
  }
  #synonym-list {
    min-height: 80vh;
    max-height: max-content;
    width: 70%;
    font-size: 1.5em;
  }
</style>