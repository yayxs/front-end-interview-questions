<template>
  <div class="app-container">
    <el-container>
      <el-container>
        <el-main>
          <router-link to='/passByValue'>vue 通信</router-link>
          <router-link to='/key'>vue index key v-for</router-link>
          <router-link to='/watchComputed'>watch computed methods</router-link>
          <hr />
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      
    };
  },
  methods: {
     
  },
  mounted() {},
};
</script>
<style lang="scss">
.el-main{
  a{
    margin: 10px;
    border: 1px solid #eee;
  }
}
</style>
