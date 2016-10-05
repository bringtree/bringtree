/**
 * Created by huangpeisong on 16/10/2.
 */
var num = 1;
function next() {
  if(num==4)
  {
    alert("已经到底了，退回前一页")
    back();

  }
  else {
    var pageId = document.getElementById("page" + num);
    if(num!=1) {
      var preNum=num-1;
      var prePageId = document.getElementById("page" + preNum );
      prePageId.style.opacity=0.05;
    }

    pageId.style.opacity=1;

    if(num!=4) {
      var afterNum=num+1;
      var afterPageId = document.getElementById("page" + afterNum );
      afterPageId.style.opacity=1;
    }

    pageId.style.webkitTransform = 'rotateY(-120deg)';
    pageId.style.oTransform = 'rotateY(-120deg)';
    pageId.style.mozTransform = 'rotateY(-120deg)';
    pageId.style.msTransform = 'rotateY(-120deg)';

    pageId.style.zIndex=(-(window.getComputedStyle(pageId, null).getPropertyValue("z-Index")));
    num++
  }
}
function back() {
  if(num==1){
    alert("按错了吧，进入下一页")
    next()
  }
  else {
    num--;
    var pageId = document.getElementById("page" + num);
    if(num!=4){
      var afterNum=num+1;
      var afterPageId = document.getElementById("page" + afterNum );
      afterPageId.style.opacity=0.05;
    }

    pageId.style.opacity=1;

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
