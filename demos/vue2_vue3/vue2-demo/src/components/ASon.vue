<template>
  <div class="ason-container">
    <button @click="handleClick">ason</button>
    <a-grandson></a-grandson>
  </div>
</template>

<script>
import AGrandson from './AGrandson';
export default {
  name: "ASon",
  components:{
    AGrandson
  },
  props:{
    fatherComp:String
  },
  data() {
    return {
      ason:'ason'
    };
  },
  methods: {
    handleClick(){
      console.log(this.$parent.father)
    }
  },
  created(){
    console.log(this.$attrs);
  },
  mounted() {
  },
};
</script>
<style scoped lang="scss">
.ason-container{
  width: 10rem;
  height: 10rem;
  border:1px solid #ddd;
   position: relative;
}
</style>
