<template>
  <div class="city">
    <div class="city__current-weather">
      <a href="#" @click.prevent="$router.go(-1)" class="city__back">Go back</a>
      <div class="city__temperature">{{ city.name }}</div>
      <div class="city__humidity">Humidity: {{ city.main.humidity }} %</div>
      <div class="city__pressure">Pressure: {{ city.main.pressure }} hPa</div>
      <div class="city__temo">Temperature: {{ city.main.temp }} °C</div>
      <div class="city__temp_max">Max. daily temperature: {{ city.main.temp_max }} °C</div>
      <div class="city__temp_min">Min. daily tempereture: {{ city.main.temp_min }} °C</div>
      <div class="city__temp_min">Wind speed: {{ city.wind.speed }} meter/sec</div>
      <div class="city__temp_min">Sunrise: {{ sunrise }}</div>
      <div class="city__temp_min">Sunset: {{ sunset }}</div>
      <img :src="`http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`" alt />
      <div class="city__temp_min">{{ city.weather[0].main }}</div>
    </div>
    <div v-if="isForecastLoaded" class="city__forecast-weather">
      <forecast-day v-for="day of forecast" :day-info="day" :key="day.id" />
    </div>
    <div v-else class="city__forecast-loading">Loading forecast ...</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import params from '@/api-settings';
import ForecastDay from '@/components/ForecastDay';

export default {
  components: {
    ForecastDay,
  },
  data: _ => ({
    forecast: [],
    isForecastLoaded: false,
  }),
  created() {
    this.getForecast(this.$route.params.id);
  },
  computed: {
    city() {
      return this.$store.getters.GET_CITY(this.$route.params.id);
    },
    sunrise() {
      let sunriseTime = new Date(this.city.sys.sunrise * 1000);
      let hours = ('0' + sunriseTime.getHours()).slice(-2);
      let minutes = ('0' + sunriseTime.getMinutes()).slice(-2);
      return `${hours}:${minutes}`;
    },
    sunset() {
      let sunsetTime = new Date(this.city.sys.sunset * 1000);
      let hours = ('0' + sunsetTime.getHours()).slice(-2);
      let minutes = ('0' + sunsetTime.getMinutes()).slice(-2);
      return `${hours}:${minutes}`;
    },
  },
  methods: {
    getForecast(id) {
      this.$http
        .get('/forecast', {
          params: {
            ...params,
            id,
          },
        })
        .then(response => {
          this.isForecastLoaded = true;
          console.log(response.data);
          this.forecast = response.data.list.slice(0, 8);
        })
        .catch(e => {
          // this.isCityFinded = false;
          // this.currentCityInfo = null;
        });
    },
  },
};
</script>