<template>
    <div>
        <button @click="test">+1(原始形式)</button>
         <button @click="addCount(100)">+100(辅助函数)</button>
        <button @click="test2">+100(原始形式异步调用)</button>
         <button @click="asyncAddCount(200)">+200(辅助函数异步调用)</button>
         <div>
         list:{{$store.state.list}} 
         </div>
           <div>
         filterList原始形式调用:{{$store.getters.filterList}} 
         </div>
           <div>
         filterList辅助函数调用:{{filterList}} 
         </div>
    </div>
</template>

<script>
import {mapMutations} from 'vuex'
import {mapActions} from 'vuex'
import {mapGetters} from 'vuex'

export default {
   computed:{
        ...mapGetters(['filterList'])
   },
    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        //原始方式调用
        test(){
            //调用mutation方法 提交mutation
            //给mutation传值
            this.$store.commit('addCount',1)
        },
        test2(){
            this.$store.dispatch('asyncAddCount',100)
        },
        ...mapMutations(['addCount']),
        ...mapActions(['asyncAddCount']),
  
    },
};
</script>

<style lang="scss" scoped> 

</style>