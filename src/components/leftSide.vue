<template>
    <div id="tree">
      <ul v-for="table in table">
        <tree :table="table"></tree>
      </ul>
    </div>
</template>
<script type="text/ecmascript-6">

  import tree from './catalogueTree'


  var table = [{
    title: '1-1',
    type: [
      {
        title: '2-1',
        type: [
          {title: '3-1'},
          {
            title: '3-2',
            type: [
              {title: '4-1'}
            ]
          },
          {title: '3-3'}
        ]
      },
      {title: '2-2'},
      {title: '2-3'}
    ]
  }, {
    title: '1-1',
    type: [
      {
        title: '2-1',
        type: [
          {title: '3-1'},
          {
            title: '3-2',
            type: [
              {title: '4-1'}
            ]
          },
          {title: '3-3'}
        ]
      },
      {title: '2-2'},
      {title: '2-3'}
    ]
  }, {
    title: '1-1',
    type: [
      {
        title: '2-1',
        type: [
          {title: '3-1'},
          {
            title: '3-2',
            type: [
              {title: '4-1'}
            ]
          },
          {title: '3-3'}
        ]
      },
      {title: '2-2'},
      {title: '2-3'}
    ]
  }
  ];

  export default{
    data(){
      return {table}
    },
    components: {
      tree
    }
  }
</script>


<style scoped>

  #tree {
    margin-left: 20px;
    width: 100%;
    height: 500px;
    top: 9%;
    position: relative;


  }
</style>
