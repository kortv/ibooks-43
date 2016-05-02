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
      scale: 0
    });

    clicked = false;

    tl.staggerFrom(".g", 2, {
      rotation: '-=720',
      autoAlpha: 0,
      ease: Cubic.easeOut
    }, 0.1)
    .staggerFrom(".st", 1.2 , {
      scale: 0,
      autoAlpha: 0,
      ease: Cubic.easeOut
    }, 0.3, 1.5)
    .staggerFrom(".txt", 0.8 , {
      top: '+=50',
      autoAlpha: 0,
      ease: Cubic.easeOut
    }, 0.5, 2.7)
  }
}

document.addEventListener('click', function(e){animation(e)});
document.querySelector("#ring").addEventListener('click', function(){ location.reload()});
document.addEventListener('touchstart', function(e){animation(e)});
document.querySelector("#ring").addEventListener('touchstart', function(){ location.reload()});
