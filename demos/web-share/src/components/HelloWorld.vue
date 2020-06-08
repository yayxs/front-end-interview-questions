<template>
  <div class="hello">
   
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
   beforeCreate() {
    console.log(`子组件beforeCreate执行`);
  },
  created() {
    console.log(`子组件created执行`);
  },
  beforeMount() {
    console.log(`子组件beforeMount执行`);
  },
  mounted() {
    console.log(`子组件mounted执行`);
  },
  beforeUpdate() {
    console.log(`子组件beforeUpdate执行`);
  },
  updated() {
    console.log(`子组件updated执行`);
  },
  beforeDestroy() {
    console.log(`子组件beforeDestroy执行`);
  },
  destroyed() {
    console.log(`子组件destroyed执行`);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  width: 300px;
  height: 300px;
  border: 2px solid goldenrod;
}
</style>
