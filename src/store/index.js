import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    articles:[],
    searchKey:'',
    account: 'glove',
  },
  mutations: {
    fetchArticles: (state, payload)=> {
      state.articles = payload;
    },
    changeSearchKey: ( state, payload)=> {
      state.searchKey = payload
    },
  },
  actions: {
    fetchArticles: async( {commit })=> {
      const api = 'https://us-central1-expressapi-8c039.cloudfunctions.net/app/article'
      const result = await axios.get(api)
      const payload = result.data.data
      commit('fetchArticles',payload )
    },
    changeSearchKey:({commit} , payload) => {
      commit('changeSearchKey', payload)
    },
  },
  getters: {
    filterBySearchKey: (state, getters)=> {
      if(state.searchKey == '' ) {
        return state.articles
      }else {
        return state.articles.filter( (art) => {
          return art.title == state.searchKey})
      }
        
    }
  },
  modules: {
  }
})
