<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  computed: {
    
  },
  created() {
    this.GET_WEATHER('London')
  },
  methods: {
    ...mapActions(['GET_WEATHER'])
  }
}
</script>

<style lang="sass" scoped>

</style>