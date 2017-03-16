<template>
  <div id="header">
    <img :src="logosrc" class="logo" @click="menu">
    <input class="searchText" type="text" placeholder="Search" v-model="searchWords" @keyup="search($event)">
    <div class="result">
      <td>
        <tr v-for="value in searchResult">
          {{value}}
        </tr>
      </td>
    </div>
    <div class="login rf">
      <a>注册</a>
      <a>登陆</a>
    </div>
    <div id="power"></div>
  </div>
</template>
<script>
  import '../js/jquery-3.1.1.min'

  export default {
    data () {
      return {
        logosrc: "https://avatars0.githubusercontent.com/u/20106478?v=3&amp;s=40",
        searchWords: "",
        searchResult: [],
        width: '',
        leftSide:true,
        scorll:0
      }
    },
    methods: {
      search: function (ev) {
        const that = this;
        $.ajax({
          type: "get",
          async: false,
          url: 'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?' + "wd=" + this.searchWords,
          dataType: "jsonp",
          jsonp: "cb",
          success: function (json) {
            that.searchResult = json.s;
            while (that.searchResult.length > 5) {
              that.searchResult.pop();
            }
          }
        });
      },
      menu: function () {
        this.leftSide = !this.leftSide
      }
    },
    watch: {
      width: function (value) {
        var leftSide = document.getElementById('leftSide');
        var result = document.getElementsByClassName('result')[0];

        if (value <= 500) {
          this.logosrc = "https://cn.vuejs.org/images/menu.png";
          result.style.left = 37 + value * 0.05 + 'px';
        }
        else {
          this.logosrc = 'https://avatars0.githubusercontent.com/u/20106478?v=3&amp;s=40'
        }

        if (value < 900) {
          this.leftSide=false;
        }
        else {
          this.leftSide=true;
        }
      },

      leftSide:function (value) {
        var leftSide = document.getElementById('leftSide');

        if(value){
          leftSide.style.width = 263 + 'px';

        }else{
          leftSide.style.width = 0;
        }
      },

      scorll:function (value) {
        console.log(this.width * value)
        document.getElementById('power').style.width = this.width * value +'px'
      }
    },


    mounted(){
      const that = this;
      that.width = document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth

      window.onresize = function () {
        that.width = document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth
      };
      window.addEventListener('scroll',function (v) {
        var scorllTop = document.documentElement.scrollTop || document.body.scrollTop;
        var clientHeight = document.documentElement.clientHeight;
        var scrollHight = document.documentElement.scrollHeight;
        that.scorll=scorllTop/(scrollHight-clientHeight);
      })

    }

  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #header {
    width: 100%;
    height: 40px;
    border-bottom: 2px solid rgb(85, 85, 85);
    background-color: rgb(60, 63, 65);
    color: rgb(173, 173, 173);
    position: fixed;
    z-index: 99;
  }

  .login {
    margin: 10px 15px;
  }

  .login a:hover {
    color: white;
  }

  #power{
    height: 2px;
    background: red;
  }

  @media screen and (max-device-width: 2000px) {
    .logo {
      margin: 5px 10px;
      position: relative;
      display: inline;
      width: auto;
      height: 75%;
    }

    .searchText {
      top: 20%;
      left: 50px;
      width: 15%;
      height: 25px;
      padding-left: 8px;
      background: rgb(69, 73, 74);
      color: white;
      position: absolute;
    }

    .result {
      top: 38px;
      left: 50px;
      width: 200px;
      height: 25px;
      padding-left: 8px;
      position: absolute;
    }
  }

  @media screen and (max-width: 500px) {
    .logo {
      height: 100%;
      width: auto;
      margin: 0;
      position: relative;
      display: block;
      float: left;

    }

    .searchText {
      top: 20%;
      left: 5%;
      width: 15%;
      height: 62.5%;
      padding-left: 8px;
      background: rgb(69, 73, 74);
      color: white;
      display: block;
      float: left;
      position: relative;
    }

    .result {
      top: 82.5%;
      width: 200px;
      height: 25px;
      padding-left: 8px;
      position: absolute;
    }
  }


</style>
