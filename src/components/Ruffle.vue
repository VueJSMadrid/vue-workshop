<template>
  <div class="page hello ruffle">
    <h1>{{ msg }}</h1>
    <h2>Winner</h2>
    <h1>{{ result }}</h1>
    <h2>Raffle</h2>
    <div class="ui action input">
    <input v-model="maximum" type="text">
    <button class="ui icon purple tiny button" @click="getRandom">
      Get Result!
    </button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: '@VueJsAmsterdam Free Ticket. Tweet #VueJSMadridToAmsterdam',
        maximum: 1,
        result: ''
      }
    },
    methods: {
      getRandom () {
        this.result = Math.round(Math.random() * (this.maximum))
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
    color: white;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  .ruffle {
    background: url('../assets/VueJsMadrid.jpg') no-repeat;
    background-size: cover;
    min-height: 53em;
    margin: 0;
    padding-top: 6em;
  }

  .hello > img {
    width: 18em;
  }
</style>
