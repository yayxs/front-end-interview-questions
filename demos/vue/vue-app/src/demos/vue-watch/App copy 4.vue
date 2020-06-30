<template>
  <div>
    <p>{{baseData}}</p>
    <p>{{fullName}}</p>
    <p><input type="text" v-model="firstName"></p>
    <section>
      <button @click="handleClick">改变数据</button>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 关于基本的数据
      baseData:'',
      params:{
        arr:[1],

      },
      firstName:'',
      lastName:'',
      fullName:''
    };
  },
  created() {},
  mounted() {},
  watch:{
   baseData(val){
     console.log(val)
   },
   params:{
     handler(newVal,oldVal){
       console.log(newVal)
       console.log(oldVal)
     },
    //  deep:true, 深度监听数组对象等数据类型
     immediate: true // 一上来就执行
   }
  },
  methods:{
    handleClick(){
      // this.baseData = '12'
      this.params = {
        arr:[]
      }
    }
  }
};
</script>
<style scoped></style>
