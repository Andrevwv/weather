import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersist from 'vuex-persist';

const vuexPersist = new VuexPersist({
  key: 'weather',
  storage: window.localStorage,
});

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cities: {},
  },
  getters: {
    GET_CITIES(state) {
      return state.cities;
    },
  },
  mutations: {
    ADD_CITY: (state, cityInfo) => {
      // state.cities = {}
      state.cities[cityInfo.id] = cityInfo;
      console.log(state.cities)
    },
    REMOVE_CITY: (state, cityInfo) => {
      delete state.cities[cityInfo.id];
    },
    UPDATE_CITIES: (state, citiesWeather) => {
      citiesWeather.forEach((city) => {
        state.cities[city.id] = city;
      });
    },
  },
  actions: {
    ADD_CITY: (context, payload) => {
      context.commit('ADD_CITY', payload);
    },
    REMOVE_CITY: (context, payload) => {
      context.commit('REMOVE_CITY', payload);
    },
    UPDATE_CITIES: (context, payload) => {
      context.commit('UPDATE_CITIES', payload);
    },
  },
  plugins: [vuexPersist.plugin],
});
