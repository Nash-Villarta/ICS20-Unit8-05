let square1;
let square2;
let square3;

class Square {
  constructor() {
    this.x = random(100, 150);
    this.y = random(100, 150);
  }

  move() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
  }

  show() {
    stroke(0);
    strokeWeight(4);
    rect(this.x, this.y, 50, 50);
  }
}

function setup() {
  createCanvas(400, 400);
  square1 = new Square();
  square2 = new Square();
  square3 = new Square();
}

function draw() {
  background(220);
  square1.move();
  square1.show();
  square2.move();
  square2.show();
  square3.move();
  square3.show();
}
