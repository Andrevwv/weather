<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  data: _ => ({
    apiKey: '10d07494e770c41f4af2a455d92ee8f5',
  }),
  mounted() {
    if(Object.keys(this.$store.state.cities).length) {
      this.getWeather(Object.keys(this.$store.state.cities))
    }
  },
  computed: {
    ...mapGetters(['GET_CITIES'])
  },
  methods: {
    async getWeather (cityName) {
      this.$http.get('/group', {
        params: {
          APPID: this.apiKey,
          units: 'metric',
          id: '' + cityName,
        },
      }).then((response) => {
        console.log(response.data)
        this.currentCityInfo = response.data
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
