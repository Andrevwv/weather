<template>
  <div class="day">
    <div class="day__time">Time: {{ time }}</div>
    <div class="day__humidity">Humidity: {{ dayInfo.main.humidity }} %</div>
    <div class="day__pressure">Pressure: {{ dayInfo.main.pressure }} hPa</div>
    <div class="city__temp_max">Max. daily temperature: {{ dayInfo.main.temp_max }} °C</div>
    <div class="city__temp_min">Min. daily tempereture: {{ dayInfo.main.temp_min }} °C</div>
    <div class="day__temp_min">Wind speed: {{ dayInfo.wind.speed }} meter/sec</div>
    <img
      :src="`http://openweathermap.org/img/wn/${dayInfo.weather[0].icon}@2x.png`"
      alt="weather icon"
    />
    <div class="day__temp_min">{{ dayInfo.weather[0].main }}</div>
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