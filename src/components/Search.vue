<template>
  <div class="search">
    <h1>This is an home page</h1>
    <input type="text" v-model="city">
    <button @click="ADD_CITY(currentCityInfo)">Add</button>
    <button @click="REMOVE_CITY(currentCityInfo)">Remove</button>
  </div>
</template>