<template>
  <div id="container">
    <div id="leftSide">
      <leftSide>
      </leftSide>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import leftSide from './leftSide.vue'



  export default{
    components: {
      'leftSide': leftSide
    }

  }


</script>


<style scoped>
  #leftSide{
    width: 263px;
    height: 1500px;
    margin-left: 45px;
    background: rgb(60, 63, 65);
    overflow: hidden;

    transition: width 0.5s;
    -moz-transition: width 0.5s;
    -webkit-transition: width 0.5s;
    -o-transition: width 0.5s;
  }

  #container {
    width: 100%;
    height: 1500%;
    background: rgb(43, 43, 43)
  }
</style>
