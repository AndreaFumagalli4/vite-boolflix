<script>

export default{
  name: 'CompCardMovie',

  props: {
    title: String,
    originalTitle: String,
    originalLanguage: String,
    averageVote: Number,
    moviePosterPartialPath: String,
    movieOverview: String
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
  <div id="movie" class="col-2 p-0">
    <section class="cover_image">
      <img :src="`${imagePartialPath}${moviePosterPartialPath}`" :alt="`${title}`">
    </section>
    <section class="movie_info">
      <p>
        <span>Title: </span> {{ title }}
      </p>
      <p>
        <span>Original title: </span> {{ originalTitle }}
      </p>
      <p>
        <span>Language: </span>
        <img :src="getImagePath(originalLanguage)" :alt="originalLanguage">
      </p>
      <p>
        <span>Vote: </span>
        <i v-for=" in Math.ceil(averageVote / 2)" class="fa-solid fa-star"></i>
        <i v-for=" in (5 - Math.ceil(averageVote / 2))" class="fa-regular fa-star"></i>
      </p>
      <p>
        <span>Overview: </span> {{ movieOverview }}
      </p>
    </section>
  </div>
</template>

<style lang="scss" scoped>

  div#movie {
    margin-bottom: 4rem;
    font-size: .8rem;

    section.cover_image {
      width: 100%;
      height: 300px;
  
      img {
        width: 100%;
        height: 100%;
      }
    }

    p {
      margin-bottom: .3rem;

      span {
        font-weight: 700;
      }
    }
  }

  // div#movie:hover {
  //   display: none;
  // }
</style>
