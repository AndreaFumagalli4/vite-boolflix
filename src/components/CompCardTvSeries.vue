<script>

export default{
  name: 'CompCardTvSeries',

  props: {
    tvSeriesTitle: String,
    tvSeriesOriginalTitle: String,
    tvSeriesOriginalLanguage: String,
    tvSeriesAvarageVote: Number
  },

  methods: {
    getImagePath: function(imgPath) {
      return new URL(`../assets/img/${imgPath}.png`, import.meta.url).href;
    }
  }
}
</script>

<template>
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
    {{ tvSeriesAvarageVote }}
  </p>
</template>

<style lang="scss" scoped>

</style>
