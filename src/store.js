import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import VuexPersist from 'vuex-persist';

const vuexPersist = new VuexPersist({
  key: 'weather',
  storage: window.localStorage,
});

const base = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5',
});

Vue.prototype.$http = base;


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    apiKey: '10d07494e770c41f4af2a455d92ee8f5',
    cities: {},
  },
  getters: {

  },
  mutations: {

  },
  actions: {
    GET_WEATHER: async (context, payload) => {
      base.get('/weather', {
        params: {
          APPID: context.state.apiKey,
          q: payload,
        },
      }).then((response) => {
        console.log(response.data)
      })
        .catch((e) => {
          console.error(e)
        })
    },
  },
  plugins: [vuexPersist.plugin],
});
