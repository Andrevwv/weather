<template>
  <router-link class="city" :to="'/' + id">
    <div @click.prevent="REMOVE_CITY(id)" class="city__remove">-</div>
    <div class="city__name">{{ name }}</div>
    <div class="city__temerature">{{ temperature }}</div>
  </router-link>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  props: {
    id: Number,
    name: String,
    temperature: Number,
  },
  methods: {
    ...mapActions(['REMOVE_CITY']),
  },
};
</script>

<style lang="sass" scoped>
.city
	&__remove
		paddings: 5px

</style>