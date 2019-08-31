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
      />
    </div>
    <div v-else class="weather__placeholder">No cities added</div>
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

</style>