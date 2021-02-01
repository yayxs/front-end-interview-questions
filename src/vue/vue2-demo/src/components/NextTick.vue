<template>
  <div>
    <span ref="message_span">{{ message }}</span>
    <button @click="handleChangeMessage">修改msg信息</button>
  </div>
</template>

<script>
export default {
  name: "NextTick",
  data() {
    return {
      message: "message",
    };
  },
  methods: {
    handleChangeMessage() {
      console.log("按钮触发");
      // this.message = "message已经修改了";
      // dom 还没更新
      console.log(this.$refs.message_span);
      this.$nextTick(() => {
        console.log(this.$refs.message_span);
      });
      this.message = "message已经修改了";

    },
  },
  mounted() {
    console.log("mounted中挂载了"); // 1
    /**
     * cb nextTick接收一个回调函数作为参数，它的作用是将回调延迟到下次DOM更新周期之后执行
     */
    this.$nextTick(() => {
      console.log("nexttick中触发了"); // 3
    });
    console.log("mounted中挂载了后"); // 2
  },
};
</script>
<style scoped lang="scss"></style>
