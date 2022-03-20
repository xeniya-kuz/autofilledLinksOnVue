import Vue from 'vue'
import Vuex from 'vuex'
import general from './general'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: []
  },
  mutations: {
    setList (state, paymentsList) {
      state.list = paymentsList
    },
    addDataToList (state, payment) {
      state.list.unshift(payment)
    }
  },
  getters: {
    // получаем список покупок
    getList: state => state.list

  },
  actions: {
    fetchData ({ commit }) {
      setTimeout(() => {
        const initialPaymentsList = [
          {
            date: '28.03.2020',
            category: 'Food',
            value: 169
          },
          {
            date: '24.03.2020',
            category: 'Transport',
            value: 360
          },
          {
            date: '24.03.2020',
            category: 'Food',
            value: 532
          },
          {
            date: '20.03.2020',
            category: 'Food',
            value: 169
          },
          {
            date: '19.03.2020',
            category: 'Navigation',
            value: 50
          },
          {
            date: '12.03.2020',
            category: 'Sport',
            value: 450
          }
        ]
        commit('setList', initialPaymentsList)
      })
    }
  },
  modules: {
    namespaced: true,
    general
  }
})
