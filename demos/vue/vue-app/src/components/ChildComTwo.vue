<template>
  <div>第二个子组件{{ payload.data}}</div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  mounted() {},
  inject: {
    payload: { from: "payload" },
  },
};
</script>
<style scoped lang="scss"></style>
