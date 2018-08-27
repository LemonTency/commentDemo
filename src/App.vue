<template>
  <div id="app">
    <el-container>
      <el-header><m-header></m-header></el-header>
      <el-container>
        <el-aside width="400px"><aside-nav></aside-nav></el-aside>
        <el-main><router-view></router-view></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import asideNav from '@/components/asideNav'
import mHeader from '@/components/header'

export default {
  name: 'App',
  components:{
    asideNav,
    mHeader,
  }
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 5px;  
}
</style>
