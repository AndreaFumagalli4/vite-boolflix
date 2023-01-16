<script>

export default{
  name: 'CompCardTvSeries',

  props: {
    tvSeriesTitle: String,
    tvSeriesOriginalTitle: String,
    tvSeriesOriginalLanguage: String,
    tvSeriesAverageVote: Number,
    tvSeriesPosterPartialPath: String
  },

  data() {
    return {
      imagePartialPath: 'https://image.tmdb.org/t/p/w342',
    }
  },

  methods: {
    getImagePath: function(imgPath) {
      return new URL(`../assets/img/${imgPath}.png`, import.meta.url).href;
    }
  }
}
</script>

<template>
  <div>
    <div>
      <img :src="`${imagePartialPath}${tvSeriesPosterPartialPath}`" :alt="`${tvSeriesTitle}`">
    </div>
    <h3>
      {{ tvSeriesTitle }}
    </h3>
    <h5>
      {{ tvSeriesOriginalTitle }}
    </h5>
    <div>
      <span>Language: </span>
      <img :src="getImagePath(tvSeriesOriginalLanguage)" :alt="tvSeriesOriginalLanguage">
    </div>
    <p>
      Vote: {{ tvSeriesAverageVote }}
    </p>
    <i class="fa-solid fa-star"></i>
    <i class="fa-regular fa-star"></i>
  </div>
</template>

<style lang="scss" scoped>

</style>
