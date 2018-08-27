<template>
  <el-row class="tac">
    <el-col :span="12">
      <h5>自定义颜色</h5>
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        unique-opened
        router
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-submenu v-for="item in menu" :index="item.id" :key="item.id">
          <template slot="title">
            <icon name="share"></icon>
            <span v-text="item.name"></span>
          </template>
          <el-menu-item-group v-for="sub in item.sub" >
            <el-menu-item :index="sub.componentName" v-text="sub.name"></el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
  import menu from '@/config/menu-config'
  export default {
    data(){
      return {
        menu,
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>