<template>
  <div>
    <ul>
      <li v-for="(item,index) in list" :key="index">{{item}}</li>
      
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // vue 是如何监听数组的变化
      list:['1','2'],
    };
  },
  mounted() {
    setTimeout(()=>{
      this.list[0] = 0
    },1000)
    // setTimeout(()=>{
    //   this.$set(this.list,this.list)
    // },3000)
  },
};
</script>
<style scoped></style>
