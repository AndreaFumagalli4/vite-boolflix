<script>
import { store } from '../store';

import CompCard from './CompCard.vue';

export default{
  name: 'AppMain',

  components:{
    CompCard,
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
    <CompCard v-for="movieEl in store.moviesList"
    :title="movieEl.title"
    :originalTitle="movieEl.original_title"
    :originalLanguage="movieEl.original_language"
    :avarageVote="movieEl.vote_average"/>
  </main>
</template>

<style lang="scss" scoped>

</style>
