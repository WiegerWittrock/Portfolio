let balls = new Array(15);
let isGameOver = false;

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < balls.length; i++) {
    balls[i] = new Ball(random(0, width), random(0, 400));
  }
  setTimeout(increaseSpeed, 1000);

}

function draw() {
  if (!isGameOver) {
    background(135, 200, 200);
  } else {
    background(200, 0, 0);
  }

  for (let i = 0; i < balls.length; i++) {
    balls[i].display();
    balls[i].update();
    balls[i].mouseOver();
  }
}

function mouseMoved() {
  if (mouseX < 5 || mouseX > 395 || mouseY < 5 || mouseY > 395) {
    gameOver();
  }
}

function increaseSpeed() {
  for (let i = 0; i < balls.length; i++) {
    balls[i].speedIncrease();
  }
  setTimeout(increaseSpeed, 1000);
}

function gameOver() {
  isGameOver = true;
  print("game over");
  setTimeout(restart, 2000);
}

function restart() {
  if(mouseX< 400 && mouseX>0 && mouseY <400 && mouseY>0){
    javascript: history.go(0);
  }

}

class Ball {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.color = color(255, 0, 0);
    this.size = random(25, 50);
    this.speed = 1;
  }

  display() {
    fill(this.color);
    ellipse(this.x, this.y, this.size, this.size);
  }

  update() {
    this.y += this.speed;
    if (this.y > 450) {
      this.y = -50;
      this.x = random(0, width);
    }
    text("Score: " + this.speed.toFixed(1), 20, 20);
  }

  mouseOver() {
    if (dist(mouseX, mouseY, this.x, this.y) <= this.size / 2) {
      gameOver();
    }
  }

  speedIncrease() {
    if (!isGameOver) {
      this.speed += 0.2;
    }
  }
}
