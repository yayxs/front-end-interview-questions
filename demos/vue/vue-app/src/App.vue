<template>
  <div>
    <button v-on:click="show = !show">
      Toggle
    </button>
    <transition name="fade">
      <!--  -->
      <p v-if="show">hello</p>
    </transition>
    <div ref="test">{{test}}</div>
    <p ref="test1">p标签</p>

    <button @click="handleClick">点击</button>
  </div>
</template>

<script>
// import ChildComOne from "./components/ChildComOne.vue";

export default {
  data() {
    return {
      // vue 是如何监听数组的变化
      list: ["1", "2"],
      user: {
        name: "zs",
      },
      show:true,
      test:'begin'
    };
  },
  methods: {
    handleClick(){
      this.test = 'end'
      console.log(this.$refs.test.innerText)
    }
  },
  components: {
    // ChildComOne,
  },
  provide: {
    payload: {
      data: "test provide",
    },
  },
  // 注册局部的指令
  directives: {
    test1: {
      bind: function() {
        console.log("v-test1");
      },
    },
    test2: function() {
      console.log("v-test2");
    },
  },
  mounted() {
    setTimeout(() => {
      this.list[0] = 0;
    }, 1000);
    // setTimeout(()=>{
    //   this.$set(this.list,this.list)
    // },3000)
  },
};
</script>
<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
