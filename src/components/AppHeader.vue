<script>
import { store } from '../store';

export default{
  name: 'AppHeader',

  data() {
    return {
      store,
    }
  }
}
</script>

<template>
  <header>
    <label for="searched-movie-tv-series">
      Search movies and TV series:
    </label>
    <input type="text" id="searched-movie-tv-series" v-model="store.searchedQuery">
    <button class="btn" @click="$emit('search', store.searchedQuery)">
      Search
    </button>
  </header>
</template>

<style lang="scss" scoped>

  button {
    margin-left: 1rem;
  }
</style>
