/**
 * Created by huangpeisong on 16/10/4.
 */

//页面加载完监听一系列事件 "路回走"，人物掉"坑"，"求救"
window.onload = function () {
  var person = document.getElementById('person');
  var topRoad = document.getElementById('topRoad');
  var bottomRoad = document.getElementById('bottomRoad');
  //人前进 路回走
  person.style.left = "1000px";
  topRoad.style.width = "1000px";
  bottomRoad.style.width = "1000px";
  //人掉坑
  hole = function () {
    topRoad.style.width = "940px";
    bottomRoad.style.width = "940px";
    setTimeout(function() {
      person.style.top = "60px";
      person.style.webkitTransition = 'top 2s ease-in';
      person.style.MozTransition = 'top 2s ease-in';
      person.style.msTransition = 'top 2s ease-in';
      person.style.OTransition = 'top 2s ease-in';
      person.style.transition = 'top 2s ease-in';
      document.getElementById("ask").innerHTML = "<a href=\"mailto:huangpeison@gmail.com\">HELP ME！</a>"
    },500);
  }
  //监听人什么时候可以掉坑
  topRoad.addEventListener("webkitTransitionEnd", hole, false);
  topRoad.addEventListener("oTransitionEnd", hole, false);


}