<template>
  <div class="search">
    <h1>This is an home page</h1>
    <input type="text" v-model="city" />
    <button @click="ADD_CITY(currentCityInfo)" :disabled="!isCityFinded">Add</button>
    <div v-show="city && !isCityFinded" class="search__city-not-fined">City with such name not fined</div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import params from '@/api-settings';

export default {
  name: 'search',
  data: _ => ({
    city: '',
    currentCityInfo: null,
    isCityFinded: false,
  }),
  methods: {
    ...mapActions(['ADD_CITY']),
    async getWeather(cityName) {
      this.$http
        .get('/weather', {
          params: {
            ...params,
            q: cityName,
          },
        })
        .then(response => {
          this.isCityFinded = true;
          this.currentCityInfo = response.data;
        })
        .catch(e => {
          this.isCityFinded = false;
          this.currentCityInfo = null;
          console.log(e);
        });
    },
  },
  watch: {
    city(value) {
      this.getWeather(value);
    },
  },
};
</script>

<style lang="sass" scoped>

</style>