var tl = new TimelineLite();
var j = 0;
var wraper = document.querySelector("#wraper");

function shaker (){
  wraper.className = "animated05 shake";
  setTimeout(function(){
    wraper.className = "";
  },1000)
}
var shakerInt = setInterval(shaker, 3000);

TweenMax.from(wraper, 1, {
  delay: 0.1,
  top: "-=1500",
  ease: Bounce.easeOut
});

function animation (){

  clearInterval(shakerInt);
  
  if (j === 0) {
    
    var tri = document.querySelector(".tri");

      tri.className += " animated triangToCircle";


    j = j + 1;
    tl.to("#trtxt", 1, {
        transformOrigin:'50% -20%',
        rotationZ:"-=720",
        y: "+=150",
        x: "+=30"
      },0).to(tri, 1, {
        left: "122",
        top: "428"
      },0).to(wraper, 1, {
        left: "-=534"
      },0).set(".stxt", {
        visibility: "visible"
      }, 1.02).staggerFrom(".stxt", 1.5, {
        left: "-=500",
        autoAlpha: 0,
        ease: Back.easeOut
      }, 1.0, 1.0)
      .staggerFrom(".line", 0.5, {
        scale: 0,
        autoAlpha: 0,
        ease: Back.easeOut
      }, 0.3, 1.9)
      .staggerFrom(".txt", 1 , {
        left: "-=50",
        autoAlpha: 0,
        ease: Cubic.easeOut
      }, 0.3, 2.1);
    setTimeout(function() {
      j = 5;
    }, 4000);
  } else if (j === 5) {
    document.querySelector("body").className = "animated fadeOut";
    setTimeout(function () {
      location.reload();
    }, 1000);
  }
}

window.addEventListener('touchstart', animation);