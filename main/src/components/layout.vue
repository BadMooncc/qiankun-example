<template>
<div class="layout">
  <div class="side-bar">
    <el-menu
      default-active="home"
      router
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <div class="side-bar_logo">
        <span>{{ logo }}</span>
        <img src="../assets/logo.png" alt="">
      </div>
      <el-menu-item @click="$router.push('/vue/home')" index="home">
        <i class="el-icon-menu"></i>
        <span slot="title">home</span>
      </el-menu-item>
      <el-menu-item index="about"  @click="$router.push('/vue/abou')">
        <i class="el-icon-setting"></i>
        <span slot="title">about</span>
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
      <span @click="handleClick">{{ $store.state.userInfo.name }}</span>
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
  import actions from '@/utils/action.js'
  export default {
    props: {
      loading: Boolean
    },
    data() {
      return  {
        logo: actions.getGlobalState('logo')
      }
    },
    methods: {
      handleClick() {
        console.log(123)
        this.$store.commit('SET_NAME', '修改啦')
      },
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
  /* z-index: -1; */
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