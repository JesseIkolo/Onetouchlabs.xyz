<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <TrainingList />
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import TrainingList from './components/TrainingList.vue'
import TrainingDetails from './components/TrainingDetails.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    TrainingList,
    TrainingDetails

  }
}


</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
