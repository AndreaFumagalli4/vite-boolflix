<script>
import { store } from '../store';

export default{
  name: 'CompCard',

  props: {
    title: String,
    originalTitle: String,
    originalLanguage: String,
    avarageVote: Number
  },

  data() {
    return {
      store,
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
    {{ avarageVote }}
  </p>
</template>

<style lang="scss" scoped>

</style>
