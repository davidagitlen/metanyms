<template>
  <form id='form'>
    <div>
      <input
        placeholder='Enter a Word Here!'
        @keyup.enter.prevent>
      <button
        @click.prevent>
        Search
      </button>
    </div>
  </form>
</template>

<style scoped>
  input {
    height: 30px;
    width: 200px;
    border: .5px solid gainsboro;
    border-radius: 3px;
    padding: 0px 0px 0px 10px;
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
  #form {
    display: flex;
    flex-direction: column;
    height: 80vh;
    width: 30%;
    border-right: 1px solid gainsboro;
    margin: 35px 0px 0px 35px;
  }
</style>