<template>
  <div>第一个子组件{{payload.data}}

      <child-com-two></child-com-two>
  </div>
</template>

<script>
import ChildComTwo from './ChildComTwo.vue'

export default {
  data() {
    return {};
  },
  components:{
      ChildComTwo
  },
  inject: {
    payload: { from: "payload" },
  },
  created() {},
  mounted() {},
};
</script>
<style scoped lang="scss"></style>
