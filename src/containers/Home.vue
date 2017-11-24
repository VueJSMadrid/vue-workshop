<template>
  <div class="page">
    <div class="selectedCharacter"><h1 class="ui header">{{ selectedSearch | capitalize }}</h1></div>
    <search-character-form @updateSelected="updateSelected"></search-character-form>
    <characters-list></characters-list>
  </div>
</template>

<script>
  import SearchCharacterForm from '../components/SearchCharacterForm'
  import CharactersList from '../components/CharactersList'

  export default {
    data () {
      return {
        selectedSearch: 'Marvel Search'
      }
    },
    components: {
      SearchCharacterForm,
      CharactersList
    },
    methods: {
      updateSelected (selectedCharacter) {
        this.selectedSearch = selectedCharacter
      }
    },
    filters: {
      capitalize: function (value) {
        if (!value) return ''
        value = value.toString()
        return value.charAt(0).toUpperCase() + value.slice(1)
      }
    }
  }
</script>

<style>
  .selectedCharacter {
    margin-bottom: 2em;
  }
</style>
