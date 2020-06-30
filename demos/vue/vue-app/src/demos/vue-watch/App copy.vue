<template>
  <div>
    <section
      class="container"
      :class="{ active: isActive, 'text-err': textErr }"
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
      isActive: true,
      textErr: true,
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
