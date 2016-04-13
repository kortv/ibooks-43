var tl = new TimelineMax();

var j = 0;
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
    wraper.className = "animated fadeOut";
      console.log(e);
    clicked = false;

    j = j + 1;
    tl.staggerFrom(".c", 1, {
        left: 750,
        top: 700,
        scale: 0,
        autoAlpha: 0,
        ease: Back.easeOut
      }, 0.8)
      .staggerFrom(".line", 1 , {
        scale: 0,
        autoAlpha: 0,
        ease: Cubic.easeOut
      }, 0.8, 1);}

}

//document.addEventListener('click', function(e){animation(e)});
document.querySelector("#ring").onclick = function(){ location.reload(); };
document.querySelector("body").onclick = function(e){animation(e)}