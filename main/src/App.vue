<template>
  <div id="mico-main">
    <template v-if="showChild">
      <router-view></router-view>
    </template>
    <layout v-else :loading="loading">
      <div id="subapp-viewport"></div>
    </layout>
  </div>
</template>
<script>
import layout from './components/layout.vue'
export default {
  props: {
    loading: Boolean
  },
  computed: {
    showChild() {
      return !this._subapp.filter(item => this.$route.path.indexOf(item.name) !== -1).length
    }
  },
  components: {
    layout
  }
}
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
html,body,#mico-main{
  height: 100%;
}
#subapp-viewport {
  min-height: 400px;
}
</style>