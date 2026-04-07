// setup canvas
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

let width = (canvas.width = window.innerWidth);
let height = (canvas.height = window.innerHeight);

// random whole number
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// random rgb color
function randomRGB() {
  return `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`;
}

// avoid zero velocity so balls do not get stuck
function randomVelocity(min, max) {
  let value = random(min, max);
  while (value === 0) {
    value = random(min, max);
  }
  return value;
}

// mouse position
const mouse = {
  x: width / 2,
  y: height / 2,
};

// force field settings
const field = {
  radius: 150,     // change this to make the field bigger/smaller
  strength: 2,     // change this to make the force stronger/weaker
};

window.addEventListener("mousemove", (event) => {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
});

window.addEventListener("resize", () => {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
});

class Ball {
  constructor(x, y, velX, velY, color, size) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.color = color;
    this.size = size;
  }

  draw() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
  }

  applyMouseForce() {
    const dx = this.x - mouse.x;
    const dy = this.y - mouse.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < field.radius && distance > 0) {
      const strength = (field.radius - distance) / field.radius;
      const dirX = dx / distance;
      const dirY = dy / distance;

      this.velX += dirX * strength * field.strength;
      this.velY += dirY * strength * field.strength;
    }
  }

  update() {
    if (this.x + this.size >= width) {
      this.x = width - this.size;
      this.velX = -this.velX;
    }

    if (this.x - this.size <= 0) {
      this.x = this.size;
      this.velX = -this.velX;
    }

    if (this.y + this.size >= height) {
      this.y = height - this.size;
      this.velY = -this.velY;
    }

    if (this.y - this.size <= 0) {
      this.y = this.size;
      this.velY = -this.velY;
    }

    this.x += this.velX;
    this.y += this.velY;
  }

  collisionDetect() {
    for (const ball of balls) {
      if (this !== ball) {
        const dx = ball.x - this.x;
        const dy = ball.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const minDistance = this.size + ball.size;

        if (distance < minDistance && distance > 0) {
          // color change
          this.color = ball.color = randomRGB();

          // swap velocities for bounce
          const tempVelX = this.velX;
          const tempVelY = this.velY;

          this.velX = ball.velX;
          this.velY = ball.velY;

          ball.velX = tempVelX;
          ball.velY = tempVelY;

          // separate overlapping balls
          const overlap = minDistance - distance;
          const pushX = (dx / distance) * (overlap / 2);
          const pushY = (dy / distance) * (overlap / 2);

          this.x -= pushX;
          this.y -= pushY;
          ball.x += pushX;
          ball.y += pushY;
        }
      }
    }
  }
}

const balls = [];

while (balls.length < 50) {
  const size = random(10, 40);

  const ball = new Ball(
    random(size, width - size),
    random(size, height - size),
    randomVelocity(-7, 7),
    randomVelocity(-7, 7),
    randomRGB(),
    size
  );

  balls.push(ball);
}

function loop() {
  ctx.fillStyle = "rgb(0 0 0 / 25%)";
  ctx.fillRect(0, 0, width, height);

  // draw force field
  ctx.beginPath();
  ctx.strokeStyle = "white";
  ctx.lineWidth = 2;
  ctx.arc(mouse.x, mouse.y, field.radius, 0, 2 * Math.PI);
  ctx.stroke();

  for (const ball of balls) {
    ball.applyMouseForce();
    ball.update();
    ball.collisionDetect();
    ball.draw();
  }

  requestAnimationFrame(loop);
}

loop();
