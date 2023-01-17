<script>
import { store } from '../store';

export default{
  name: 'AppHeader',

  data() {
    return {
      store,
      headList: ['Home', 'SerieTV', 'Film', 'Originali', 'Aggiunti di recente', 'La mia lista'],
    }
  }
}
</script>

<template>
  <header>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 d-flex align-items-center">
          <img src="https://image.tmdb.org/t/p/w342/wwemzKWzjKYJFfCeiB57q3r4Bcm.png" alt="Netflix logo">
          <ul class="d-flex">
            <li v-for="listEl in headList">
              <a href="#">{{ listEl }}</a>
            </li>
          </ul>
          <div class="input-group-small ms-auto">
            <input type="text" id="searched-movie-tv-series" v-model="store.searchedQuery">
          </div>
          <button @click="$emit('search', store.searchedQuery)">
            Search
          </button>
        </div>
      </div>
    </div>
    
  </header>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

  img {
    width: 100px;
    height: 30px
  }

  ul{
    list-style-type: none;
    margin: 0;
    
    li {
      font-size: .75rem;
      padding: 0 .5rem;
    }
  }

  input {
    background-color: black;
    color: white;
    border: 1px solid white;
  }

  button {
    margin-left: .5rem;
    border: 1px solid $main-color;
    padding: .1rem 1rem;
    border-radius: 2rem;
    color: white;
    background-color: black;
  }


</style>
