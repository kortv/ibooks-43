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

    tl.staggerFrom(".os", 1.5, {
      scale: 0,
      autoAlpha: 0,
      ease: Back.easeOut
    }, 1.2)
    .staggerFrom(".os-st", 0.5 , {
      scale: 0,
      autoAlpha: 0,
      ease: Back.easeOut
    }, -0.2, 0.5)
    .staggerFrom(".st", 1 , {
      scale: 0,
      autoAlpha: 0,
      ease: Cubic.easeOut
    }, 0.5, 1.5)
    .staggerFrom(".col", 0.8 , {
      scale: 0,
      autoAlpha: 0,
      ease: Back.easeOut
    }, -0.3, 1.8)
    .staggerFrom(".dot", 0.8 , {
      scale: 0,
      autoAlpha: 0,
      ease: Back.easeOut
    }, 0.3, 2)
    .staggerFrom(".line", 0.8 , {
      scale: 0,
      autoAlpha: 0,
      ease: Back.easeOut
    }, -0.3, 2.2)
    .staggerFrom(".txt", 0.8 , {
      top: '-=50',
      autoAlpha: 0,
      ease: Cubic.easeOut
    }, -0.3, 2.7)
    .staggerFrom(".num", 1 , {
      top: '-=50',
      autoAlpha: 0,
      ease: Cubic.easeOut
    }, -0.8, 1.5)
  }
}

document.addEventListener('click', function(e){animation(e)});
document.querySelector("#ring").addEventListener('click', function(){ location.reload()});
document.addEventListener('touchstart', function(e){animation(e)});
document.querySelector("#ring").addEventListener('touchstart', function(){ location.reload()});
