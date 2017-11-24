<template>
  <div v-if="!!characters.length" class="ui characters-list cards">
    <characters-item v-for="character in characters" :key="character.name" :character="character">
    </characters-item>
  </div>
  <div v-else="" class="ui bck"></div>
</template>

<script>
import { mapGetters } from 'vuex'
import CharactersItem from './CharactersItem'

export default {
  components: {
    CharactersItem
  },
  computed: mapGetters([
    'characters'
  ])
}
</script>

<style>
  .bck {
    margin-top: 3em;
    width: 100%;
    background: url('../assets/marvel_bck.jpeg') no-repeat;
    background-size: cover;
    height: 33em;
    opacity: 0.8;
  }
.characters-list.cards {
  margin-top: 2em;
  justify-content: center;
}

.characters-list.cards .image {
    position: relative;
    width: 100%;
    height: 246px;
    overflow: hidden;
}

.characters-list.cards .image img {
  position: absolute;
  left: 50%;
  top: 50%;
  height: 100%;
  width: auto;
  -webkit-transform: translate(-50%,-50%);
      -ms-transform: translate(-50%,-50%);
          transform: translate(-50%,-50%);
}

.ui.card, .ui.cards > .card {
  width: 364px;
}
</style>
