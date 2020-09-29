<template>
  <div class="app-container">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>
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
      activeName: 'second'
    };
  },
  methods: {
     handleClick() {
        // console.log(tab, event);
      }
  },
  mounted() {},
};
</script>
<style lang="scss">
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}
.el-main{
  a{
    margin-right: 20px;
  }
}

</style>
