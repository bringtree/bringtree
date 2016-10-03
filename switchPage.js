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
    pageId.style.webkitTransform = 'rotateY(-120deg)';
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
    pageId.style.webkitTransform = 'rotateY(0deg)';
    pageId.style.zIndex=(-(window.getComputedStyle(pageId, null).getPropertyValue("z-Index")));
  }
}
