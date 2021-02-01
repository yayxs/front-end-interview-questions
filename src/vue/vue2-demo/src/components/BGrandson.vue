<template>
  <div class="box">
    bgson
    <button @click="handleClick"></button>
  </div>
</template>

<script>
export default {
  name: "BGrandson",
  data() {
    return {};
  },
  methods: {
    handleClick(){
     this.$root.Bus.$emit('sendVal',123)
    }
  },
  mounted() {
    console.info(this.$attrs, this.$listeners);
  },
};
</script>
<style scoped lang="scss">
.box{
  width: 100px;
  height: 100px;
  border: 1px solid #aaa;
  position: absolute;
  top: 300px;
  left: 20px;
}
</style>
