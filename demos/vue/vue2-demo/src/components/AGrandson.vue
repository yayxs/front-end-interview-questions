<template>
  <div class="box">
    agson-{{provideData}}
  </div>
</template>

<script>
export default {
  name: "AGrandson",
  data() {
    return {};
  },
  inject: ['provideData'],
  methods: {},
  mounted() {},
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
}</style>
