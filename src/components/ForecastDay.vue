<template>
  <div class="day">
    <img
      class="day__image"
      :src="require(`../assets/images/${dayInfo.weather[0].main}.svg`)"
      alt="weather icon"
    />
    <div class="day__time">{{ time }}</div>
    <div class="day__temp">{{ Math.round(dayInfo.main.temp) }} °C</div>
    <div class="day__info info">
      <img :src="require(`../assets/images/Humidity.svg`)" class="info__image" />
      {{ dayInfo.main.humidity }} %
    </div>

    <div class="day__info info">
      <img :src="require(`../assets/images/Pressure.svg`)" class="info__image" />
      {{ Math.round(dayInfo.main.pressure) }} hPa
    </div>
    <div class="day__info info">
      <img :src="require(`../assets/images/Wind.svg`)" class="info__image" />
      {{ dayInfo.wind.speed }} m/s
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dayInfo: Object,
  },
  computed: {
    time() {
      let time = new Date(this.dayInfo.dt * 1000);
      let hours = ('0' + time.getHours()).slice(-2);
      let minutes = ('0' + time.getMinutes()).slice(-2);
      return `${hours}:${minutes}`;
    },
  },
};
</script>

<style lang="sass" scoped>
.day
	display: flex
	flex-direction: column
	align-items: flex-start
	padding: 1rem
	background-color: #f4f4f4
	border-radius: 0.5rem
	&:hover
		background-color: #eeeeee

	&__image
		align-self: center
		max-width: 3rem
	&__info
		margin-top: 1rem
	&__time
		align-self: center
		margin-top: 0.3rem
		font-size: 0.8rem
	&__temp
		align-self: center
		margin-top: 1rem
		font-size: 2rem

.info
	display: flex
	align-items: center
	&__image
		width: 1.5rem
		margin-right: 0.5rem
</style>