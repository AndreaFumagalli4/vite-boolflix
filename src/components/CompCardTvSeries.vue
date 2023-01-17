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
  <div class="col-2 p-0">
    <section class="cover_image">
      <img :src="`${imagePartialPath}${tvSeriesPosterPartialPath}`" :alt="`${tvSeriesTitle}`">
    </section>
    <section class="tv_series_info d-none">
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
        Vote: {{ Math.ceil(tvSeriesAverageVote / 2) }}
      </p>
      <i v-for=" in Math.ceil(tvSeriesAverageVote / 2)" class="fa-solid fa-star"></i>
      <i v-for=" in (5 - Math.ceil(tvSeriesAverageVote / 2))" class="fa-regular fa-star"></i>
    </section>
  </div>
</template>

<style lang="scss" scoped>
  section.cover_image {
    width: 100%;
    height: 300px;

    img {
      width: 100%;
      height: 100%;
    }
  }
</style>
