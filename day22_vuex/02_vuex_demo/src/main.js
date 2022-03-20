import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import { setTimeout } from 'core-js'

Vue.config.productionTip = false
Vue.use(Vuex)
const store = new Vuex.Store({
  state:{
    count:0,
    list:[1,2,3,4,5,6,7,8,9,10]
  },
  mutations:{
    // addCount(state){
    //   state.count += 1;
    // }
    addCount(state,payload){
      state.count += payload;
    }
  },
  actions:{
    asyncAddCount(context,params){
      setTimeout(() => {
        context.commit('addCount',params)
      }, 1000);
    }
  },
  getters:{
    filterList:state=>state.list.filter(item=>item>5)
  }
})
new Vue({
  render: h => h(App),
  store
}).$mount('#app')
