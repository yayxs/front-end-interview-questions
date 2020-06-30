<template>
  <div>{{list}} </div>
</template>

<script>
export default {
  data() {
    return {
      // vue 是如何监听数据的变化
      list:[],
    };
  },
  mounted() {
    setTimeout(()=>{
      this.list[0] = 0
    },1000)
    setTimeout(()=>{
      this.list.length = 5
    },2000)
  },
};
</script>
<style scoped></style>
