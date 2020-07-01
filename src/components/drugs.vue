<template>
  <el-container>
    <el-header>药店管理系统</el-header>
    <el-container >
      <el-aside >
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          height="500px"
        >

          <el-menu-item index="1" >
            <router-link to="/drug/show">药品信息管理</router-link>
          </el-menu-item>
          <el-menu-item index="2">
            <router-link to="/sorts/show">药品种类管理</router-link>

          </el-menu-item>
        </el-menu>
      </el-aside>

      <el-main >
        <router-view>

        </router-view>

      </el-main>
    </el-container>
    <el-footer>欢迎使用</el-footer>
  </el-container>
</template>

<script>
    export default {
        name: "drugs"
    }
</script>

<style scoped>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height:  60px;

  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    height:  500px;
  }

  .el-main {

    color: #333;
    text-align: center;
    height:  500px;
  }
</style>
