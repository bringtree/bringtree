<template>
  <div id="app">
    <myheader></myheader>
    <container></container>
    <myfooter></myfooter>
  </div>
</template>

<script>
  import header from "./components/header.vue"
  import container from "./components/container.vue"
  import footer from "./components/footer.vue"


  export default {
    components:{
      'myheader':header,
      'container':container,
      'myfooter':footer
    }

  }


</script>

<style>
  @import 'css/reset.css';

</style>
