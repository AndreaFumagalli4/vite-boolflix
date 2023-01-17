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
      movieApiUri: 'https://api.themoviedb.org/3/search/movie',
      tvSeriesApiUri: 'https://api.themoviedb.org/3/search/tv'
    }
  },

  methods: {
    getMoviesAndTvSeries(searchedQuery) {
      // Chiamata axios Movies
      axios.get( this.movieApiUri, {
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
      });
      // Chiamata axios TV Series
      axios.get( this.tvSeriesApiUri, {
        params: {
          api_key: this.apiKey,
          query: searchedQuery
        }
      })
      .then((response) => {
        console.log(response.data.results);
        this.store.tvSeriesList = response.data.results;
      })
      .catch(function (error) {
        console.warn(error);
      })
    },
  }
}
</script>

<template>
    <AppHeader @search="getMoviesAndTvSeries"/>
    <AppMain />
</template>

<style lang="scss">
@use './styles/general.scss' as *;
@use './styles/partials/variables' as *;

</style>
