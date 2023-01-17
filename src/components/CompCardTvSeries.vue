<script>

export default{
  name: 'CompCardTvSeries',

  props: {
    tvSeriesTitle: String,
    tvSeriesOriginalTitle: String,
    tvSeriesOriginalLanguage: String,
    tvSeriesAverageVote: Number,
    tvSeriesPosterPartialPath: String,
    tvSeriesOverview: String
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
  <div id="tv_series" class="col-2 px-2">
    <section class="cover_image">
      <img :src="`${imagePartialPath}${tvSeriesPosterPartialPath}`" :alt="`${tvSeriesTitle}`">
    </section>
    <section class="tv_series_info p-2">
      <p>
        <span>Title: </span> {{ tvSeriesTitle }}
      </p>
      <p>
        <span>Original title: </span> {{ tvSeriesOriginalTitle }}
      </p>
      <p>
        <span>Language: </span>
        <img :src="getImagePath(tvSeriesOriginalLanguage)" :alt="tvSeriesOriginalLanguage">
      </p>
      <p>
        <span>Vote: </span>
        <i v-for=" in Math.ceil(tvSeriesAverageVote / 2)" class="fa-solid fa-star"></i>
        <i v-for=" in (5 - Math.ceil(tvSeriesAverageVote / 2))" class="fa-regular fa-star"></i>
      </p>
      <p>
        <span>Overview: </span> {{ tvSeriesOverview }}
      </p>
    </section>
  </div>
</template>

<style lang="scss" scoped>

  div#tv_series {
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

  section.tv_series_info {
    display: none;
    transition: transform 1s;
    height: 300px;
    overflow: hidden;
  }

  div#tv_series:hover .cover_image {
    display: none;
  }

  div#tv_series:hover .tv_series_info {
    display: block;
    background-color: black;
    border-radius: 20px;
    transform: scale(1.2);
    z-index: 1;
    border: 1px solid white;
  }
</style>
