<script>

export default{
  name: 'CompCardMovie',

  props: {
    title: String,
    originalTitle: String,
    originalLanguage: String,
    averageVote: Number,
    moviePosterPartialPath: String
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
      <img :src="`${imagePartialPath}${moviePosterPartialPath}`" :alt="`${title}`">
    </div>
    <h3>
      {{ title }}
    </h3>
    <h5>
      {{ originalTitle }}
    </h5>
    <div>
      <span>Language: </span>
      <img :src="getImagePath(originalLanguage)" :alt="originalLanguage">
    </div>
    <p>
      Vote: {{ averageVote }}
    </p>
    <i class="fa-solid fa-star"></i>
    <i class="fa-regular fa-star"></i>
  </div>
</template>

<style lang="scss" scoped>

</style>
