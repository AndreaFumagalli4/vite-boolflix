<script>
import { store } from '../store';
import axios from 'axios';

export default{
  name: 'AppHeader',

  data() {
    return {
      store,
      apiKey: '27a5ddd7ce822efc0bc88cd25fbe4c09',
      apiUri: 'https://api.themoviedb.org/3/search/movie'
    }
  },

  methods: {
    getMovies(searchedQuery) {
      // Chiamata axios
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
  },

  created(){
    // this.getMovies();
  }
}
</script>

<template>
  <header>
    <label for="searched-movie">
      Write query:
    </label>
    <input type="text" id="searched-movie" v-model="searchedQuery">
    <button @click="getMovies(searchedQuery)">Search</button>

    <ul>
      <li v-for="movieEl in store.moviesList">
        <h3>
          {{ movieEl.title }}
        </h3>
        <h5>
          {{ movieEl.original_title }}
        </h5>
        <p>
          Language: {{ movieEl.original_language }}
          <br>
          Vote: {{ movieEl.vote_average }}
        </p>
      </li>
    </ul>
  </header>
</template>

<style lang="scss" scoped>

  button {
    margin-left: 1rem;
  }
</style>
