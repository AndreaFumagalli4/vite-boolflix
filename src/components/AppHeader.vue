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
    <label for="searched-movie">
      Search movie:
    </label>
    <input type="text" id="searched-movie" v-model="store.searchedQuery">
    <button @click="$emit('search', store.searchedQuery)">
      Search
    </button>
  </header>
</template>

<style lang="scss" scoped>

  button {
    margin-left: 1rem;
  }
</style>
