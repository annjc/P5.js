var circle1 = {
  x: 270,
  y: 100,
  xspeed: 4,
  yspeed: 4
};
var circle2 = {
  x1: 50,
  y1: 450,
  x1speed: 4,
  y1speed: 4
};
var rad = 25;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0);
  var r = random(0, 255);
  var g = random(0, 255);
  var b = random(0, 255);
  ellipse(circle1.x, circle1.y, rad * 2, rad * 2);
  ellipse(circle2.x1, circle2.y1, rad * 2, rad * 2);
  circle1.x += circle1.xspeed;
  circle1.y += circle1.yspeed;
  if (circle1.x > width - rad || circle1.x < rad) {
    circle1.xspeed = -circle1.xspeed;
    fill(r, g, b);
  }
  if (circle1.y > height - rad || circle1.y < rad) {
    circle1.yspeed = -circle1.yspeed;
    fill(r, g, b);
  }
  circle2.x1 += circle2.x1speed;
  circle2.y1 += circle2.y1speed;
  if (circle2.x1 > width - rad || circle2.x1 < rad) {
    circle2.x1speed = -circle2.x1speed;
    fill(r, g, b);
  }
  if (circle2.y1 > height - rad || circle2.y1 < rad) {
    circle2.y1speed = -circle2.y1speed;
    fill(r, g, b);
  }
}