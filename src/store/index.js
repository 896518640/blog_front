import { createStore } from 'vuex'

export default createStore({
  state: {
    userInfo:{
      user:""
    }
  },
  mutations: {
    loginSuccess(state,userInfo){
      state.userInfo = userInfo
    },
    loginOut(state){
      state.userInfo = {user:""}
    }
  },
  actions: {
  },
  modules: {
  }
})
