var tl = new TimelineMax();
var sortList = document.querySelector('#r');


// Simple list
var sortableList = Sortable.create(sortList, { animation: 300,
  onUpdate: function (evt/**Event*/){
    isSorted(evt.from.children);
  }
 });

function isSorted(el) {
  var nums = [].map.call(el, function (e) {
    return e.getAttribute('data-num')
  });
  if(nums.join('')==='12345'){
    sortableList.options.disabled = true;
  };
}

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
    TweenMax.to( '#l', 1,{
      autoAlpha: 1,
      top: '-=50'
    });
    TweenMax.to( '#r', 1,{
      autoAlpha: 1,
      top: '-=50',
    delay: 0.4
    });
    clicked = false;
  }
}

document.addEventListener('click', function(e){animation(e)});
document.querySelector("#ring").addEventListener('click', function(){ location.reload()});
document.addEventListener('touchstart', function(e){animation(e)});
document.querySelector("#ring").addEventListener('touchstart', function(){ location.reload()});
