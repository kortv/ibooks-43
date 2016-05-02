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
      rotation: '+=200',
      left: 800,
      autoAlpha: 0,
      ease: Back.easeOut
    }, 0.5)
    .staggerFrom(".circl", 1, {
      rotation: '-=20',
      scale: 0.6,
      autoAlpha: 0,
      ease: Cubic.easeOut
    }, 0.5, 0.5)
    .staggerFrom(".str", 0.8 , {
      scale: 0,
      autoAlpha: 0,
      ease: Cubic.easeOut
    }, 0.4, 1.5)
    .staggerFrom(".txt", 1 , {
      top: '-=50',
      autoAlpha: 0,
      ease: Cubic.easeOut
    }, 0.5, 1)
  }
}

document.addEventListener('click', function(e){animation(e)});
document.querySelector("#ring").addEventListener('click', function(){ location.reload()});
document.addEventListener('touchstart', function(e){animation(e)});
document.querySelector("#ring").addEventListener('touchstart', function(){ location.reload()});
