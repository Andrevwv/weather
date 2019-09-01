<template>
  <div class="weather">
    <search />
    <div class="weather__cities" v-if="Object.keys(GET_CITIES).length">
      <city-card
        v-for="city in GET_CITIES"
        :key="city.id"
        :id="city.id"
        :name="city.name"
        :temperature="city.main.temp"
        :weather="city.weather[0].main"
      />
    </div>
    <div v-else class="weather__placeholder">
      <h1>No cities added</h1>
      <p>Please enter city name and press 'Add'</p>
    </div>
  </div>
</template>

<script>
import Search from '@/components/Search';
import CityCard from '@/components/CityCard';
import { mapGetters } from 'vuex';

export default {
  components: { Search, CityCard },
  computed: {
    ...mapGetters(['GET_CITIES']),
  },
};
</script>

<style lang="sass" scoped>
.weather
  padding: 4rem 2rem
  min-height: 100vh

  &__cities
    margin-top: 4rem
    display: grid
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-template-rows: 1fr;
    grid-gap: 4rem
  &__placeholder
    font-size: 2rem
    margin-top: 4rem
</style>