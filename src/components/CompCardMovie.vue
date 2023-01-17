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
  <div id="movie" class="col-2 px-2">
    <section class="cover_image">
      <img :src="`${imagePartialPath}${moviePosterPartialPath}`" :alt="`${title}`">
    </section>
    <section class="movie_info p-2">
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

  section.movie_info {
    display: none;
    transition: transform 1s;
    height: 300px;
    overflow: hidden;
  }

  div#movie:hover .cover_image {
    display: none;
  }

  div#movie:hover .movie_info {
    display: block;
    background-color: black;
    border-radius: 20px;
    transform: scale(1.2);
    z-index: 1;
    border: 1px solid white;
  }
</style>
