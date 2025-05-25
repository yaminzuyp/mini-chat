<template>
  <div id="app">
    <input
      type="text"
      v-model="inputText"
      placeholder="Type here"
    />
    <p>Your input: {{ inputText }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputText: ''
    };
  }
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
}
input {
  padding: 10px;
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>