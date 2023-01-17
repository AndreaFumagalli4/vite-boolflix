<script>
import { store } from '../store';

import CompCardMovie from './CompCardMovie.vue';
import CompCardTvSeries from './CompCardTvSeries.vue';

export default{
  name: 'AppMain',

  components:{
    CompCardMovie,
    CompCardTvSeries
  },

  data() {
    return {
      store,
    }
  },

}
</script>

<template>
  <main class="mt-5">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <h2>
            Movies:
          </h2>
        </div>
      </div>
      <div class="row d-flex">
      <CompCardMovie v-for="movieEl in store.moviesList"
      :title="movieEl.title"
        :originalTitle="movieEl.original_title"
        :originalLanguage="movieEl.original_language"
        :averageVote="movieEl.vote_average"
        :moviePosterPartialPath="movieEl.poster_path" />
      </div>
      <div class="row">
        <div class="col-12">
          <h2>
            TV Series:
          </h2>
        </div>
      </div>
      <div class="row">
        <CompCardTvSeries v-for="tvSeriesEl in store.tvSeriesList"
        :tvSeriesTitle="tvSeriesEl.name"
        :tvSeriesOriginalTitle="tvSeriesEl.original_name"
        :tvSeriesOriginalLanguage="tvSeriesEl.original_language"
        :tvSeriesAverageVote="tvSeriesEl.vote_average"
        :tvSeriesPosterPartialPath="tvSeriesEl.poster_path" />
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>

</style>
