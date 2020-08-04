var minOpacity = 0.2;
var maxOpacity = 0.4;
var numCircles = 80;
var container = $(".container");
var minDuration = 2;
var maxDuration = 4;
var minX = 0;
var maxX = container.width();

var minY = 2000;
var maxY = 600;

var minSize = 10;
var maxSize = 80;

var minDelay = 2;
var maxDelay = 6;


for (var i = 0; i < numCircles; i++) {
  var circle = $("<div class='circle'/>").appendTo(container);
  animateCircle(circle, true);
}

$(window).resize(onResize);

function animateCircle(circle, firstRun) {
  
  var x = random(minX, maxX);
  var y = random(minY, maxY);
  var size = random(minSize, maxSize);
  var delay = random(minDelay, maxDelay);
  var opacity = random(minOpacity, maxOpacity);
  var duration = random(minDuration, maxDuration);
    
  TweenLite.set(circle, {
    x: x,
    y: -size,
    width: size,
    height: size,
    autoAlpha: opacity
  });
  
  var tween = TweenLite.to(circle, duration, {
    autoAlpha: 0,
    y: y,    
    delay: delay,
    onComplete: animateCircle,
    onCompleteParams: [circle]
  });
  
  if (firstRun) {
    tween.time(random(duration));
  }
}

function onResize() {
  maxX = container.width();
}

function random(min, max) {
  if (max == null) { max = min; min = 0; }
  return Math.random() * (max - min) + min;
}