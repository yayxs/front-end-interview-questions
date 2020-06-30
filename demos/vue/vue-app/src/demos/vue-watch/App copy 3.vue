<template>
  <div>
    <!-- <section
      class="container"
      :class="[firClass,secClass]"
    >
      class绑定
    </section> -->
    <section :style="styleObj">style绑定</section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      styleObj:{
        color:'pink',
        fontSize:'20px'
      }
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
