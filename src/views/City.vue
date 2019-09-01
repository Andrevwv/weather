<template>
  <div class="city__wrapper">
    <div v-if="city" class="city">
      <a href="#" @click.prevent="$router.go(-1)" class="city__back">Go back</a>
      <div class="city__name">{{ city.name }}</div>
      <div class="city__current-weather">
        <div class="city__main">
          <img class="city__image" :src="`/images/${city.weather[0].main}.svg`" alt />
          <div class="city__temp">{{ Math.round(city.main.temp) }} °C</div>
        </div>
        <div class="city__additional">
          <div class="city__info info">
            <div class="info__heading">Humidity</div>
            <div class="info__container">
              <img src="/images/Humidity.svg" class="info__image" />
              <div class="info__value">{{ city.main.humidity }} %</div>
            </div>
          </div>
          <div class="city__info info">
            <div class="info__heading">Pressure</div>
            <div class="info__container">
              <img src="/images/Pressure.svg" class="info__image" />
              <div class="info__value">{{ Math.round(city.main.pressure) }} hPa</div>
            </div>
          </div>
          <div class="city__info info">
            <div class="info__heading">Max. temp.</div>
            <div class="info__container">
              <img src="/images/Max.svg" class="info__image" />
              <div class="info__value">{{ Math.round(city.main.temp_max) }} °C</div>
            </div>
          </div>
          <div class="city__info info">
            <div class="info__heading">Min. temp.</div>
            <div class="info__container">
              <img src="/images/Min.svg" class="info__image" />
              <div class="info__value">{{ Math.round(city.main.temp_min) }} °C</div>
            </div>
          </div>
          <div class="city__info info">
            <div class="info__heading">Wind speed</div>
            <div class="info__container">
              <img src="/images/Wind.svg" class="info__image" />
              <div class="info__value">{{ city.wind.speed }} m/s</div>
            </div>
          </div>
          <div class="city__info info">
            <div class="info__heading">Sunrise</div>
            <div class="info__container">
              <img src="/images/sunrise.svg" class="info__image" />
              <div class="info__value">{{ sunrise }}</div>
            </div>
          </div>
          <div class="city__info info">
            <div class="info__heading">Sunset</div>
            <div class="info__container">
              <img src="/images/sunset.svg" class="info__image" />
              <div class="info__value">{{ sunset }}</div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="isForecastLoaded" class="city__forecast-weather">
        <forecast-day v-for="day of forecast" :day-info="day" :key="day.id" />
      </div>
      <div v-else class="city__forecast-loading">Loading forecast ...</div>
    </div>
    <div v-else>
      Such city was not found. Go
      <router-link to="/">HOME</router-link>
    </div>
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
      console.log(this.$store.getters.GET_CITY(this.$route.params.id));
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
          this.forecast = response.data.list.slice(0, 8);
        })
        .catch(e => {
          console.log(e);
        });
    },
  },
};
</script>

<style lang="sass" scoped>
.city
	display: flex
	flex-direction: column
	padding: 4rem 0
	&__current-weather
		display: flex
		flex-wrap: wrap
		justify-content: space-around
		align-self: center
		flex-grow: 1
		width: 100%
		padding: 3rem 1rem
		align-items: center
	&__name
		font-size: 5rem
		margin-top: 1rem

	&__image
		width: 22rem
		max-width: 100%
	&__back
		margin-left: 3rem
		padding: 1rem
		display: inline-block
		float: left
		align-self: flex-start

	&__additional
		display: grid
		grid-template-columns: repeat(3, 1fr)
		grid-gap: 2rem
		@media all and (max-width: 560px)
			grid-template-columns: repeat(2, 1fr)

	&__temp
		font-size: 4rem
		margin-top: 2rem
	&__forecast-weather
		display: grid
		grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
		grid-gap: 1rem
		padding: 3rem 1rem
.info
	padding: 1rem
	&__container
		display: flex
		align-items: center
		margin-top: 1rem
	&__heading
		font-size: 0.9rem
	&__image
		width: 2rem
	&__value
		margin-left: 1rem
</style>