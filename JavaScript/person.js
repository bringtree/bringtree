/**
 * Created by huangpeisong on 16/10/4.
 */


window.onload=function () {
  var person=document.getElementById('person');
  var topRoad=document.getElementById('topRoad');
  var bottomRoad=document.getElementById('bottomRoad');
  person.style.left = "1000px";
  topRoad.style.width = "1000px";
  bottomRoad.style.width = "1000px";

  topRoad.addEventListener("webkitTransitionEnd", hole, false);
  topRoad.addEventListener("oTransitionEnd", hole, false);

  function hole() {
    topRoad.style.width = "940px";
    bottomRoad.style.width = "940px";

    setTimeout(function() {
      person.style.top = "60px";
      person.style.webkitTransition = 'top 2s ease-in';
      person.style.MozTransition = 'top 2s ease-in';
      person.style.msTransition = 'top 2s ease-in';
      person.style.OTransition = 'top 2s ease-in';
      person.style.transition = 'top 2s ease-in';
    },500);


  }
}

