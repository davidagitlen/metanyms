<template>
  <div id='synonym-list' v-if='this.synonyms.length > 0'>
    <ul>
      <li v-for='(synonym, index) in this.synonyms' v-bind:key='index'>{{synonym}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'listoutput',
  props: ['synonyms']
}
</script>

<style scoped>
  #synonym-list {
    height: 80vh;
    width: 70%;
  }
</style>