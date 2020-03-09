// Variables
var playerHeight = 80
var playerWidth = 20
var playerSpeed = 8
var playerL = 200
var playerR = 200

var scoreL = 0
var scoreR = 0

var ballX = 300
var ballY = 200
var ballSize = 20
var ballXSpeed = 4
var ballYSpeed = -2

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(200);
  
  // draw left player
  rect(0, playerL, playerWidth, playerHeight);
  
  // draw right player
  rect(width-playerWidth, playerR, playerWidth, playerHeight);
  
  // draw ball
  ellipse(ballX, ballY, ballSize)
  
  line(300, 20, 300, 90)
  
  
  /* User Input */
  // 'W' key
  if (keyIsDown(87)) {
    playerL = playerL - playerSpeed
  }
  // 'S' key
  if (keyIsDown(83)) {
    playerL = playerL + playerSpeed
  }
  
  if (keyIsDown(UP_ARROW)) {
    playerR = playerR - playerSpeed
  }
  if (keyIsDown(DOWN_ARROW)) {
    playerR = playerR + playerSpeed
  }
  
  /* Game logic */
  if (playerL <= 0) {
    playerL = 0;
  }
  if (playerL > height - playerHeight) {
    playerL = height - playerHeight;
  }
  
  if (playerR <= 0) {
    playerR = 0;
  }
  if (playerR > height - playerHeight) {
    playerR = height - playerHeight;
  }
  
  ballX = ballX + ballXSpeed
  ballY = ballY + ballYSpeed
  
  // Bounce off top wall
  if (ballY < 0) {
    ballY = 0;
    ballYSpeed = -ballYSpeed;
  }

  // Bounce off bottom wall
  if (ballY > height) {
    ballY = height;
    ballYSpeed = -ballYSpeed;
  }
  
  
  // bounce off right player
  if (ballX > width - playerWidth && ballY >= playerR && ballY <= playerR + playerHeight) {
    ballX = width - playerWidth
    ballXSpeed = -ballXSpeed
  }
  
  if (ballX < playerWidth && ballY >= playerL && ballY <= playerL + playerHeight) {
    ballX = playerWidth
    ballXSpeed = -ballXSpeed
  }
  
  
  // playerL scores!
  if (ballX > width) {
    ballX = width/2
    ballY = height/2
    scoreL = scoreL + 1
    ballXSpeed = - ballXSpeed 
  }
  
   if (ballX < 0) {
    ballX = width/2
    ballY = height/2
    scoreR = scoreR + 1
    ballXSpeed = - ballXSpeed 
  }

if (scoreL == 0) {
textSize(50);
  text('0', 230, 70)
}
if (scoreL == 1) {
textSize(50);
  text('1', 230, 70)
}
if (scoreL == 2) {
textSize(50);
  text('2', 230, 70)
}
if (scoreL == 3) {
textSize(50);
  text('3', 230, 70)
}
if (scoreL == 4) {
textSize(50);
  text('4', 230, 70)
}
if (scoreL == 5) {
textSize(50);
  text('5', 230, 70)
}
if (scoreL == 6) {
textSize(50);
  text('6', 230, 70)
}
if (scoreL == 7) {
textSize(50);
  text('7', 230, 70)
}
if (scoreL == 8) {
textSize(50);
  text('8', 230, 70)
}
  if (scoreL == 9) {
textSize(50);
  text('9', 230, 70)
}if (scoreL == 10) {
textSize(50);
  text('10', 230, 70)
}if (scoreL == 11) {
textSize(50);
  text('11', 230, 70)
ballXSpeed = 0
   ballYSpeed = 0
}
  
  
  
  if (scoreR == 0) {
textSize(50);
  text('0', 340, 70)
}
   if (scoreR == 1) {
textSize(50);
  text('1', 340, 70)
}
 if (scoreR == 2) {
textSize(50);
  text('2', 340, 70)
}
 if (scoreR == 3) {
textSize(50);
  text('3', 340, 70)
}
 if (scoreR == 4) {
textSize(50);
  text('4', 340, 70)
}
 if (scoreR == 5) {
textSize(50);
  text('5', 340, 70)
}
 if (scoreR == 6) {
textSize(50);
  text('6', 340, 70)
}
 if (scoreR == 7) {
textSize(50);
  text('7', 340, 70)
}
 if (scoreR == 8) {
textSize(50);
  text('8', 340, 70)
}
 if (scoreR == 9) {
textSize(50);
  text('9', 340, 70)
}
 if (scoreR == 10) {
textSize(50);
  text('10', 340, 70)
}
 if (scoreR == 11) {
textSize(50);
  text('11', 340, 70)
   ballXSpeed = 0
   ballYSpeed = 0
}

  
}

