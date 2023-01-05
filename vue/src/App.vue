<template>
  <div id="app">
    demo子应用页面这个选项 此子应用的mico-app配置 "entry"资源加载为404，但是qiankun并未报加载子应用失败的错误，这种情况下，当点击"demo子应用菜单"后再点击"home"菜单正常，但是再次点击about菜单时控制台报错 chunk load error,且路由在进入abour页面后瞬间会回到上个页面
    <div id="nav">
      <router-link to="/home">Home</router-link>
      |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding-bottom: 20px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
