<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import params from '@/api-settings'
export default {
  created() {
    if(Object.keys(this.GET_CITIES).length) {
      this.getWeather(Object.keys(this.GET_CITIES))
    }
  },
  computed: {
    ...mapGetters(['GET_CITIES'])
  },
  methods: {
    ...mapActions(['UPDATE_CITIES']),
    async getWeather (citiesNames) {
      this.$http.get('/group', {
        params: {
          ...params,
          id: citiesNames.toString(),
        },
      }).then((response) => {
        this.UPDATE_CITIES(response.data.list)
      })
        .catch((e) => {
          console.log(e);
        });
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
