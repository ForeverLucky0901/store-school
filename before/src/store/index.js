import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    storelist: [],
    sum: 0
  },
  mutations: {
    add(state, item) {
   
      let gooditem = state.storelist.findIndex(item1 => item1.good_id === item.good_id);
      // 如果是第一次往购物车里添加商品，那么就让它的数量等于1

      if (gooditem === -1) {
        // 并且将其添加到购物车数据中
        Vue.set(item, 'count', 1)
        state.storelist.push(item)
      } else {
        // 如果不是第一次添加商品，那么直接让它的数量加加就可
        if (gooditem.count > 0) {
          gooditem.count++
        }
      }
    },
    Checkitem(state, val) {
      let ind = state.storelist.findIndex(item => item.good_id === val);
      state.storelist[ind].singlecheck != state.storelist[ind].singlecheck;

    },

  },
  getters: {
    getsum(state) {
      let sum = 0;
      state.storelist.forEach(item => {
        if (item.singlecheck) {
          sum += item.good_price * item.count;
        }
      });
      return sum * 100
    },
    getlist(state) {
      console.log(state.storelist)
      return state.storelist
    }
  },
  actions: {

  },
  modules: {
  }
})
