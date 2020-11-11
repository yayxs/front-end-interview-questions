<template>
  <div class="pass-by-val-con">
    <button @click="handleClick" ref="btn">this.$children/refs</button>
    <hr />
    <section class="main">
      <a-son :fatherComp="fatherComp"> </a-son>
      <!-- 绑定所有的属性和事件 -->
      <b-son ref="bson" aData="adata" ></b-son>
    </section>
  </div>
</template>

<script>
import ASon from "../../components/ASon.vue";
import BSon from "../../components/BSon.vue";

export default {
  name: "PassByValue",
  components: {
    ASon,
    BSon,
  },
  provide(){
    return {
      provideData:'provideData',
    }
  },
  data() {
    return {
      father:'father',
      fatherComp: "fatherComp",
    };
  },
  methods: {
    handleClick() {
      // console.log(this.$children[0].ason);
      // console.log(this.$refs)
      for(let domVm in this.$refs){
        console.log(this.$refs[domVm])
      }
      console.log(this.$refs['bson'].bson)
    },
  },
  mounted() {
    this.$root.Bus.$on('sendVal',(val)=>{
      console.log(val)
    })
  },
};
</script>
<style scoped lang="scss">
.pass-by-val-con {
  margin: 0 auto;
  width: 90%;
  height: 600px;
  border: 1px solid #ccc;
  .main {
    display: flex;
    justify-content: space-around;
  }
}
</style>
