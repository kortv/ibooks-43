var tl = new TimelineMax();

var wraper = document.querySelector("#wraper");

function shaker (){
  wraper.className = "animated05 shake";
  setTimeout(function(){
    wraper.className = "";
  },1000);
}
var shakerInt = setInterval(shaker, 3000);

var clicked = true;
function animation (e){
  if (clicked){
    clearInterval(shakerInt);
    TweenMax.to( wraper, 1,{
      autoAlpha: 0,
    });

    clicked = false;

    tl.staggerFrom(".c", 1, {
      scale: 0,
      autoAlpha: 0,
      ease: Back.easeOut
    }, -0.8)
    .staggerFrom(".str", 0.5 , {
      scale: 0,
      autoAlpha: 0,
      ease: Back.easeOut
    }, -0.2, 0.5)
    .staggerFrom(".txt", 1 , {
      left: '-=50',
      autoAlpha: 0,
      ease: Back.easeOut
    }, -1, 1.5)
  }
}

document.addEventListener('click', function(e){animation(e)});
document.querySelector("#ring").addEventListener('click', function(){ location.reload()});
document.addEventListener('touchstart', function(e){animation(e)});
document.querySelector("#ring").addEventListener('touchstart', function(){ location.reload()});
