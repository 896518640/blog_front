<template>
  <!-- 头部导航 -->
  <AppNav/>
  <!-- 内容部分 -->
  <div id="main">
    <!-- 左侧边栏 -->
      <div class="m-left">
        <AppSide></AppSide> 
      </div>
      <!-- 路由页面 -->
      <div class="m-right">
          <router-view></router-view>
      </div>
  </div>
</template>
<script>
import AppNav from "./components/AppNav.vue"
import AppSide from "./components/AppSide.vue"
import {mapMutations} from "vuex"
export default {
  components:{
    AppNav,
    AppSide
  },
  methods:{
    ...mapMutations(['loginSuccess'])
  },
  async created(){
    let {data} = await this.$axios({
      method:"POST",
      url:"/login/check"
    }) 
    console.log(data);
    //未登录
    if(data.code) return
    //已登陆
    this.loginSuccess(data.data)
  }
}
</script>
<style lang="less" >
@import "assets/css/reset.css";
@import "assets/css/font.css";
@import "assets/css/font/iconfont.css";
::-webkit-scrollbar{
  width: 5px;
  height: 0;
}
::-webkit-scrollbar-thumb{
  border-radius: 5px;
  -webkit-box-shadow:inset 0 0 5px rgba(0,0,0,.2);
  background: rgba(0,167,232,.3);
}
::-webkit-scrollbar-track{
  -webkit-box-shadow:inset 0 0 5px rgba(0,0,0,.2);
  border-radius: 10px;
  background: #ededed;
}
body {
  background-color: #f2f2f2;
  background: url("assets/img/bg/bg-left.png") no-repeat 0 50px fixed, url("assets/img/bg/bg-right.png") no-repeat right 50px fixed;
}
#main{
  width: 100%;
  max-width: 1300px;
  box-sizing: border-box;
  padding: 0 15px;
  display: flex;
  margin: 65px auto 0;
  .m-left{
    width: 270px;
    /* height: 500px; */
    /* background-color: pink; */
    margin-right: 15px;
  }
  .m-right{
    flex: 1;
    /* height: 400px; */
    /* background: #00b7ff; */
  }
}
</style>
