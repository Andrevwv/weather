<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import params from '@/api-settings';
export default {
  created() {
    // this.ADD_CITY({});
    if (Object.keys(this.GET_CITIES).length) {
      this.getWeather(Object.keys(this.GET_CITIES));
    }
  },
  computed: {
    ...mapGetters(['GET_CITIES']),
  },
  methods: {
    ...mapActions(['UPDATE_CITIES', 'ADD_CITY']),
    async getWeather(citiesNames) {
      this.$http
        .get('/group', {
          params: {
            ...params,
            id: citiesNames.toString(),
          },
        })
        .then(response => {
          this.UPDATE_CITIES(response.data.list);
        })
        .catch(e => {
          console.log(e);
        });
    },
  },
};
</script>

<style lang="sass">
*
  box-sizing: border-box;
html,
body
  padding: 0
  margin: 0

body
  min-height: 100vh
#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 1440px
  margin: 0 auto

a
  color: #2c3e50

</style>
