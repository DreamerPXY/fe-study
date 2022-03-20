<template>
  <div id="app">
    <div>
    state的数据:{{$store.state.count}}
    </div>
    <div>
    计算属性的数据:{{count}}  
    </div>
    <ChildA/>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import ChildA from './components/ChildA.vue'
export default {
  name: 'App',
  computed:{
    // count(){
    //   return this.$store.state.count;
    // }
    ...mapState(['count'])
  },
  components: {
    ChildA
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
