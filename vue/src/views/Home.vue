<template>
  <div class="home">
    
    你好，今天是{{ new Date() }},欢迎您, {{ $globalStore.state.userInfo.name }}
    子应用 {{ $store.state.userInfo.name }}
    <div>
      <el-input style="width: 200px;" v-model="name"></el-input>
      <el-button @click="handleConfirm" type="primary">修改名称</el-button>
    </div>
    
    <el-button @click="dialogVisible = true" type="text">Open Dialog</el-button>

    <el-dialog
      :before-close="handleClose"
      :visible.sync="dialogVisible"
      title="Dialog"
      width="30%">
      <span>dialog message</span>
      <span class="dialog-footer" slot="footer">
        <el-button @click="dialogVisible = false">cancel</el-button>
        <el-button @click="dialogVisible = false" type="primary">ok</el-button>
      </span>
    </el-dialog>
  </div>

</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'home',
  components: {
    HelloWorld,
  },
  data() {
    return {
      dialogVisible: false,
      name: ''
    };
  },
  watch: {
    '$globalStore.state.userInfo.name'(val) {
      console.log(213)
    }
  },
  created() {
    this.name = this.$actions.getGlobalState('logo')
  },
  methods: {
    handleConfirm() {
      if(!this.name) return this.$message.error('请输入名字')
      this.$actions.setGlobalState({
        logo: this.name
      })
      this.$globalStore.commit('SET_NAME', this.name)
    },
    handleClose(done) {
      this.$confirm('Sure to close？')
        .then(_ => {
          done();
        })
        .catch(_ => {
        });
    },
  },
};
</script>
