<template>
  <div id="mico-main">
    <!-- <template v-if="showChild">
      <router-view></router-view>
    </template> -->
    <layout :loading="loading">
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
  components: {
    layout
  },
  data() {
    return {
      showChild: '',
    }
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