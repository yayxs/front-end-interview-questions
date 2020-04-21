<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld
  },
  beforeCreate() {
    console.log(`父组件beforeCreate执行`);
  },
  created() {
    console.log(`父组件created执行`);
  },
  beforeMount() {
    console.log(`父组件beforeMount执行`);
  },
  mounted() {
    console.log(`父组件mounted执行`);
  },
  beforeUpdate() {
    console.log(`父组件beforeUpdate执行`);
  },
  updated() {
    console.log(`父组件updated执行`);
  },
  beforeDestroy() {
    console.log(`父组件beforeDestroy执行`);
  },
  destroyed() {
    console.log(`父组件destroyed执行`);
  }
};
</script>

<style>
#app {
  border: 3px solid red;
  width: 400px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
