<template>
  <router-link class="city" :to="'/' + id" :style="getStyle()">
    <div @click.prevent="REMOVE_CITY(id)" class="city__remove"></div>
    <div @click.prevent="getWeather(id)" class="city__reload">
      <img class="city__reload-img" src="../assets/images/reload.svg" alt="weather image" />
    </div>
    <img class="city__image" :src="require(`../assets/images/${weather}.svg`)" alt="weather image" />
    <div class="city__temerature">{{ Math.round(temperature) }}&#8451;</div>
    <div class="city__name">{{ name }}</div>
  </router-link>
</template>

<script>
import { mapActions } from 'vuex';
import params from '@/api-settings';

export default {
  props: {
    id: Number,
    name: String,
    temperature: Number,
    weather: String,
  },
  methods: {
    ...mapActions(['REMOVE_CITY', 'UPDATE_CITY']),
    async getWeather(cityId) {
      this.$http
        .get('/weather', {
          params: {
            ...params,
            id: cityId,
          },
        })
        .then(response => {
          this.UPDATE_CITY(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    getStyle() {
      const main = [
        '#FD9207',
        '#FDBE07',
        '#1E22B0',
        '#0E65A2',
        '#FD4607',
        '#A405A4',
        '#05B05E',
        '#049F8A',
        '#05B05E',
      ];
      const lighter = [
        '#FEAD45',
        '#FECF45',
        '#5155D8',
        '#4296D1',
        '#FE7445',
        '#D239D2',
        '#3AD88C',
        '#38CFBA',
        '#3AD88C',
      ];
      const random = Math.floor(Math.random() * main.length);

      return {
        background: `linear-gradient(to right bottom, ${lighter[random]}, ${main[random]})`,
        boxShadow: `0px 25px 21px -15px ${lighter[random]}`,
      };
    },
  },
  computed: {},
};
</script>

<style lang="sass" scoped>
.city
	padding: 3rem
	color: white
	text-decoration: none
	border-radius: 0.5rem	
	position: relative
	display: flex
	flex-direction: column
	&:hover
		.city__remove
			opacity: 0.7
			&:hover
				opacity: 1
				transform: rotate(90deg)
		.city__reload
			opacity: 0.7
			&:hover
				opacity: 1
				transform: rotate(90deg)

	&__remove
		transition: all 0.2s
		display: inline-block
		opacity: 0
		position: absolute
		border-radius: 50%
		background-color: white
		right: 1rem
		top: 1rem
		width: 1.3rem
		height: 1.3rem
		z-index: 1

		&::before,
		&::after
			position: absolute
			content: ''
			top: 0.62rem
			left: 0.42rem
			background: #808080
			width: 0.5rem
			height: 1px
		&::before
			transform: rotate(45deg)
		&::after
			transform: rotate(-45deg)
	&__reload
		transition: all 0.2s
		display: inline-block
		opacity: 0
		position: absolute
		border-radius: 50%
		background-color: white
		left: 1rem
		top: 1rem
		width: 1.3rem
		height: 1.3rem
		z-index: 1

	&__reload-img
		width: 70%
		margin: 0.2rem
	&__temerature
		font-size: 3.5rem
		align-self: flex-start
		z-index: 1
		text-shadow: 4px 4px 5px rgba(0,0,0,0.4);
	&__name
		align-self: flex-start
		margin-top: 1rem
		font-size: 1.3rem;
		z-index: 1
		text-shadow: 4px 4px 5px rgba(0,0,0,0.4);

	&__image
		height: 100%
		position: absolute
		top: 0
		right: 0
		align-self: flex-end
</style>