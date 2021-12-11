var canvas;
var backgroundImage, car1_img, car2_img, track;
var fuelImage, powerCoinImage, lifeImage;
var obstacle1Image, obstacle2Image;
var database, gameState;
var form, player, playerCount;
var allPlayers, car1, car2, fuels, powerCoins, obstacles;
var cars = [];

function preload() {
  backgroundImage = loadImage("assets/BG.jpg");
  car1_img = loadImage("assets/Boi2.png");
  car2_img = loadImage("assets/lol.png");
  track = loadImage("assets/BG.jpg");
  fuelImage = loadImage("assets/wb.png");
  powerCoinImage = loadImage("assets/goldCoin.png");
  obstacle1Image = loadImage("assets/rock.png");
  obstacle2Image = loadImage("assets/rock2.png");
  lifeImage = loadImage("assets/life.png");
  BGMusic = loadSound("Sounds/TRY4.mp3");
  Yay = loadSound("Sounds/Winn.wav");
  coin = loadSound("Sounds/coin.wav");
  WB = loadSound("Sounds/wb.wav");
  Ow = loadSound("Sounds/Obstacle.wav");
 // Ow = loadSound("Sound/Obstacle.wav");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(backgroundImage);
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
