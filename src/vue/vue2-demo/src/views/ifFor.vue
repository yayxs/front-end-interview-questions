<template>
  <div>
    <div v-for="item in 20" :key="item" v-if="false">{{item}}</div>
      
    <div v-else>
      v-else
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>
<style scoped lang="scss"></style>
