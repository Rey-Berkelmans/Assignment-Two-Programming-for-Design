let circleY = [];

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 300; i++) {
    circleY[i] = random(height);
  }
}

function draw() {
  background(0,0,0);

  for (let i = 0; i < circleY.length; i++) {
    let circleX = width * i / circleY.length;
    circle(circleX, circleY[i], 5);

    circleY[i]++;
    
    if (circleY[i] > height) {
      circleY[i] = 0;
    }
     ellipse(200,400,450,100)
    ellipse(200,320,100,100)
  ellipse(200,260,80,80)
  ellipse(200,200,60,60)
  ellipse(185,200,10,10)
  ellipse(215,200,10,10)
          }   
  }
