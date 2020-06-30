<template>
  <div>
    <section
      class="container"
      :class="[firClass,secClass]"
    >
      class绑定
    </section>
    <section style=""></section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firClass: 'active',
      textErr: 'text-err',
    };
  },
  created() {},
  mounted() {},
};
</script>
<style scoped>
.container {
  width: 100px;
  height: 50px;
}
.active {
  border: 1px solid red;
}
.text-err {
  color: pink;
}
</style>
