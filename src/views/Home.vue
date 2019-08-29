<template>
  <div class="about">
    <h1>This is an home page</h1>
    <input type="text" v-model="city">
    <button @click="ADD_CITY(currentCityInfo)">Add</button>
    <button @click="REMOVE_CITY(currentCityInfo)">Remove</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  data: _ => ({
    apiKey: '10d07494e770c41f4af2a455d92ee8f5',
    city: '',
    currentCityInfo: {}
  }),
  computed: {
    
  },
  created() {
    this.getWeather('London')
  },
  methods: {
    ...mapActions(['ADD_CITY', 'REMOVE_CITY']),
    async getWeather (cityName) {
      this.$http.get('/weather', {
        params: {
          APPID: this.apiKey,
          units: 'metric',
          q: cityName,
        },
      }).then((response) => {
        console.log(response.data)
        this.currentCityInfo = response.data
      })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  watch: {
    city (value) {
      this.getWeather(value)
    }
  }
}
</script>

<style lang="sass" scoped>

</style>