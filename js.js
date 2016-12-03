/**
 * Created by huangpeisong on 2016/12/2.
 */
let noob= document.getElementById("hxji");
function Hxji(id) {
  let o =new Object();
  let power = 100;
  let i=0;
  o.id=id;
  o.power = 100;
  o.word = ["hello","world","feed","catch"];
  o.action = function (command,i) {
      power = power - 10;
      o.dead();
      switch (command)
      {
        case "say": {
          console.log(o.word[i]);
          document.getElementById("message").innerHTML=o.word[i];
          break;
        }
        case "feed":{
          power = 100;
          o.action("say",2);
          break;
        }
        case "catch":{
          o.trap();
          break;
        }
        default:{
          console.log(command);
          break;
        }
      }

  };
  o.trap = function () {
    id.onmousedown = function () {
      o.action("say",3);
      let x,y,nowX,nowY,maxX,maxY;
      x = event.clientX - id.offsetLeft;
      y = event.clientY - id.offsetTop;
      document.onmousemove = function (event) {
        nowX = event.clientX-x;
        nowY = event.clientY-y;
        maxX = document.body.clientWidth-id.offsetWidth;
        maxY = document.body.clientHeight-id.offsetHeight;
        if(nowX>maxX){nowX = maxX;}
        else if(nowX<0){nowX = 0;}
        if(nowY>maxY){nowY = maxY;}
        else if(nowY<0){nowY =0;}
        id.style.left=nowX+'px';
        id.style.top=nowY+'px';
      }
    };
    //id.onmouseup和document.onmouseup 冲突 存在问题 ，先留坑 以后找办法补
    id.onmouseup=function () {
      o.action("say",0);
    };
    document.onmouseup = function () {
      document.onmousemove = null;
    };

  };
  o.dead = function () {
    console.log('dead');
    id.style.opacity=o.power*0.1;
    for(let i=0 ;i<id.children.length;i++)
    {
      id.children[i].style.opacity=o.power*0.01;
    }
  };

  //随机移动 （需要判断是不是可以随机移动的状态）配合css的transform  先留着 考试完再来
  o.walking = function () {
    let randomX,randomY;


  };
  //
  o.skill = function () {

  };


  Object.defineProperty(o,"power",{
    get:function () {
      return power;
    },
    set:function (newValue) {
      o.dead();
      power =  newValue;
    }
  });
  return o;
}
let hxji_1 = new Hxji(noob);
hxji_1.action("catch");
