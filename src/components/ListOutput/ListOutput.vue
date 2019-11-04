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
  // props: ['synonyms']
  // props: {
  //   synonyms: ['synonyms'],
  //   findSynonyms: { type: Function }
  // }
  props: ['synonyms', 'findSynonyms']
}
</script>

<style scoped>
  #synonym-list {
    height: 80vh;
    width: 70%;
  }
</style>