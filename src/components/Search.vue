<template>
  <div class="search">
    <input
      ref="input"
      class="search__input"
      type="text"
      v-model="city"
      placeholder="Type city name here"
    />
    <button class="search__add" @click="ADD_CITY(currentCityInfo)" :disabled="!isCityFinded">Add</button>
    <div class="search__meassage" v-show="city && !isCityFinded">City with such name not found</div>
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
  mounted() {
    this.$refs.input.focus();
  },
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
.search
  display: flex
  align-items: center
  justify-content: center
  position: relative

  &__input
    border: 1px solid #e9e9e9
    border-radius: .5rem
    padding: 0.7rem
    font-size: 1.5rem
    outline: none
    color: #767676
    &::-webkit-input-placeholder 
      color: #bdbdbd
    &::-moz-placeholder 
      color: #bdbdbd
    &::-ms-input-placeholder 
      color: #bdbdbd
    &::-moz-placeholder 
      color: #bdbdbd
  &__add
    margin-left: 1.5rem
    background: transparent
    border: 1px solid #e9e9e9
    border-radius: .5rem
    font-size: 1rem
    padding: 0.8rem
    transition: all 0.2s
    color: #767676;
    outline: none
    &:hover:not(:disabled)
      cursor: pointer
      background-color: #e9e9e9
      &:active:not(:disabled)
        cursor: pointer
        background-color: #d0d0d0

  &__meassage
    position: absolute
    bottom: -2rem
</style>