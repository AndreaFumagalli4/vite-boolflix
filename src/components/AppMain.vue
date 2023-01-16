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
  <main>
    <CompCardMovie v-for="movieEl in store.moviesList"
    :title="movieEl.title"
    :originalTitle="movieEl.original_title"
    :originalLanguage="movieEl.original_language"
    :averageVote="Math.ceil(movieEl.vote_average / 2)"
    :moviePosterPartialPath="movieEl.poster_path" />

    <CompCardTvSeries v-for="tvSeriesEl in store.tvSeriesList"
    :tvSeriesTitle="tvSeriesEl.name"
    :tvSeriesOriginalTitle="tvSeriesEl.original_name"
    :tvSeriesOriginalLanguage="tvSeriesEl.original_language"
    :tvSeriesAverageVote="Math.ceil(tvSeriesEl.vote_average / 2)"
    :tvSeriesPosterPartialPath="tvSeriesEl.poster_path" />
  </main>
</template>

<style lang="scss" scoped>

</style>
