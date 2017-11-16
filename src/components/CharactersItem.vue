<template>
  <div class="ui card fadeIn-animation">
    <div class="image">
      <img :src="character.image"/>
    </div>
    <div class="content">
      <div class="header">{{character.name}}</div>
      <div class="description">
        {{character.description}}
      </div>
    </div>
    <div class="extra content">
        <span class="right floated">
          <a target="_blank" :href="character.url">
            <button class="ui icon purple tiny button">
                More Info
            </button>
          </a>
        </span>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['character']
  }
</script>

<style>

  .ui.card, .ui.cards > .card {
    width: 364px;
  }
</style>
