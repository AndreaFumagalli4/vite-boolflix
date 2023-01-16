<script>
import { store } from './store';
import axios from 'axios';

import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

export default{
  name: 'App',

  components:{
    AppHeader,
    AppMain
  },

  data() {
    return {
      store,
      apiKey: '27a5ddd7ce822efc0bc88cd25fbe4c09',
      apiUri: 'https://api.themoviedb.org/3/search/movie',
    }
  },

  methods: {
    getMovies(searchedQuery) {

      axios.get( this.apiUri, {
          params: {
            api_key: this.apiKey,
            query: searchedQuery
          }
        })
        .then((response) => {
          console.log(response.data.results);
          this.store.moviesList = response.data.results;
        })
        .catch(function (error) {
          console.warn(error);
        })
      }
  }
}
</script>

<template>
    <AppHeader @search="getMovies"/>
    <AppMain />
</template>

<style lang="scss">
@use './styles/general.scss' as *;
@use './styles/partials/variables' as *;

</style>
