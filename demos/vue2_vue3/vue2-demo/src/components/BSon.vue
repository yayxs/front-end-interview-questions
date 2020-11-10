<template>
  <div class="b-son-box">
    bson
    <b-grandson v-bind="$attrs" v-on="$listeners"></b-grandson>
  </div>
</template>

<script>
import BGrandson from "./BGrandson";
export default {
  name: "BSon",
  components: {
    BGrandson,
  },
  data() {
    return {
      bson: "bson",
    };
  },
  methods: {},
  created() {
    console.log(this.$attrs); 
    console.log(this.$listeners); 
  },
};
</script>
<style scoped lang="scss">
.b-son-box {
  width: 10rem;
  height: 10rem;
  border: 1px solid #ddd;
  position: relative;
}
</style>
