<template>
  <li class="side">
    <div @click.prevent="toggle" class="title">
      <span v-if="isFolder">[{{open ? '-' : '+'}}]</span>
      <span v-if="!isFolder">&nbsp;&nbsp;&nbsp;&nbsp;</span>
      {{table.title}}
    </div>
    <ul v-show="open" v-if="isFolder">
      <tree-Menu v-for="table in table.type" :table="table" :key="table.id"></tree-Menu>
    </ul>
  </li>
</template>


<script>
  export default{
    name: 'treeMenu',
    props: ['table'],
    data() {
      return {
        open: false,
      }
    },
    computed: {
      isFolder: function () {
        return this.table.type &&
          this.table.type.length
      }
    },
    methods: {
      toggle: function () {
        if (this.isFolder) {
          this.open = !this.open
        }
      }
    }

  }
</script>

<style>

  .title {
    color: rgb(187, 187, 187);
    font-size: 1em;
  }

  ul {
    padding-left: 1.5em;
    line-height: 1.7em;
  }
</style>
