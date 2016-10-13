/**
 * Created by huangpeisong on 16/10/2.
 */
//页面切换
var num = 1;
function next() {
  if(num==4)//翻动ing页面 == 4 就停下来
  {
    alert("已经到底了，退回前一页");
    back();
  }
  else {
    var pageId = document.getElementById("page" + num);//当前(翻动ing页面)的(前一页)变"模糊"
    if(num!=1) {
      var preNum = num-1;
      var prePageId = document.getElementById("page" + preNum );
      prePageId.style.opacity = 0.05;
    }

    pageId.style.opacity=1;//翻动ing页面 要清晰

    if(num!=4) {
      var afterNum=num+1;//翻动ing页面的下一页(也就是你在看的页面) 要清晰
      var afterPageId = document.getElementById("page" + afterNum );
      afterPageId.style.opacity=1;
    }

    pageId.style.webkitTransform = 'rotateY(-120deg)';//页面绕y转120deg
    pageId.style.oTransform = 'rotateY(-120deg)';
    pageId.style.mozTransform = 'rotateY(-120deg)';
    pageId.style.msTransform = 'rotateY(-120deg)';

    pageId.style.zIndex=(-(window.getComputedStyle(pageId, null).getPropertyValue("z-Index")));//实现页面的排列顺序

    num++
  }
  if(num==4) {
    type();//打印出页面的内容
  }
}

//pape4 type
function type() {
  data = function (saythank,version,github) {
    this.sayThank = saythank;
    this.version = version;
    this.github = github;
  };
  var huangpeisong = new data("end <br /> 谢谢观看","v2.1beta","<a href='https://github.com/bringtree'>https://github.com/bringtree</a>");
  if(num==4) {
    var words;
    for(value in huangpeisong)
    {
      document.getElementById("typeWords").innerHTML = (document.getElementById("typeWords").innerHTML)+"<br />"+huangpeisong[value];
    }
  }
}

//原理同上
function back() {
  if(num==1){
    alert("按错了吧，进入下一页");
    next();
  }
  else {
    num--;
    var pageId = document.getElementById("page" + num);
    if(num!=4){
      var afterNum = num+1;
      var afterPageId = document.getElementById("page" + afterNum );
      afterPageId.style.opacity = 0.05;
    }

    pageId.style.opacity = 1;

    if(num!=1) {
      var preNum = num - 1;
      var prePageId = document.getElementById("page" + preNum);
      prePageId.style.opacity = 1;
    }

    pageId.style.webkitTransform = 'rotateY(0deg)';
    pageId.style.oTransform = 'rotateY(0deg)';
    pageId.style.mozTransform = 'rotateY(0deg)';
    pageId.style.msTransform = 'rotateY(0deg)';

    pageId.style.zIndex=(-(window.getComputedStyle(pageId, null).getPropertyValue("z-Index")));
  }
}

