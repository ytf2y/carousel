<template>
  <div class="hello">
    <Carousel :count="2"></Carousel>
    <Carousel :count="5"></Carousel>
    <Carousel :count="10"></Carousel>
  </div>
</template>

<script type="text/babel">

  import Carousel from './Carousel.vue'

export default {
  name: 'HelloWorld',
  data () {
    return {

    }
  },
  components:{
    'Carousel':Carousel
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
</style>
