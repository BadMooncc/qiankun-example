<template>
<div class="layout">
  <div class="side-bar">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <div class="side-bar_logo">
        <span>qiankun</span>
        <img src="../assets/logo.png" alt="">
      </div>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
  </div>
  <div class="header">
    <el-header style="text-align: right; font-size: 12px;line-height: 60px;">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>王小虎</span>
    </el-header>
  </div>
  <div v-loading="loading" class="main">
    <el-main>
      <slot></slot>
    </el-main>
  </div>
</div>
</template>
<script>
  export default {
    props: {
      loading: Boolean
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
<style>
.layout {
  height: 100%;
}
.side-bar {
  width: 230px;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
}
.side-bar_logo {
  width: 100%;
  height: 60px;
  text-align: center;
  line-height: 60px;
  background: #f0f0f0;
}
.side-bar_logo img {
  /* width: 100%; */
  width: 30px;
  height: 30px;
  vertical-align: middle;
}
.side-bar_logo span {
  /* width: 100%; */
  display: inline-block;
  vertical-align: top;
  height: 100%;
}
.layout .header,.main {
  padding-left: 230px;
  width: 100%;
}
.layout .header {
  box-sizing: border-box;
  border-bottom: 1px solid #f0f0f0;
  position: absolute;
  z-index: -1;
  left: 0;
  top: 0;
}
.layout .main {
  width: 100%;
  min-height: 100vh;
  position: absolute;
  z-index: 1;
  left: 0;
  top: 60px;
  box-sizing: border-box;
}
.el-menu-vertical-demo {
  height: 100%;
}
</style>