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

    tl.staggerFrom(".el", 1, {
      top: '-=100',
      autoAlpha: 0,
      rotationX: '+=90',
      ease: Back.easeOut
    }, -0.5)
    .staggerFrom(".line", 0.5 , {
      scale: 0,
      autoAlpha: 0,
      ease: Cubic.easeOut
    }, 0.5, 0.3)
    .staggerFrom(".txt", 0.5 , {
      scale: 0.5,
      autoAlpha: 0,
      ease: Cubic.easeOut
    }, -0.5, 0.5);
  }
}

document.addEventListener('touchstart', function(e){animation(e)});
document.querySelector("#ring").addEventListener('touchstart', function(){ location.reload()});
