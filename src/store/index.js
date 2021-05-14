import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
import {app} from '../main' //匯入我們的Vue Instance

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    articles:[],
    searchKey:'',
    account: 'glove',
    lang:'zh',
  },
  mutations: {
    fetchArticles: (state, payload)=> {
      state.articles = payload;
    },
    changeSearchKey: ( state, payload)=> {
      state.searchKey = payload
    },
    addArticles:(state, payload)=> {
      state.articles = [payload,...state.articles]
    },
    // [types.SET_LANG] (state, payload) {
    //   app.$i18n.locale = payload // 改變語言
    // }
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
    addArticles: ({commit}, payload)=> {
      payload.id = 'newId1'
      commit('addArticles', payload)
    },
    // setLang({commit}, payload) {
    //   commit(types.SET_LANG, payload)
    // }
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
