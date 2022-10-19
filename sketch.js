let idle = []
let idleRight = []
let leftWalk = []
let rightWalk = []

let mushIdle
let mushSprout = []
let mushPulse = []

let origImgSize = 100
let imgSize = 150
let imgCount = 0
let canvasWidth = 700
let canvasHeight = 500
let pos, vel, acc
const friction = 0.99
let benjamin
// mapSize must be multiples of 700
const mapSize = 1400
let benPos
let scroll
let sky, murky, murky2, startScreen

let mushrooms = []

let game
let level1


function preload() {
  idleSprite = loadImage('benjaminImages/BenjaminIdleSpriteSheet.png')
  idleRightSprite = loadImage('benjaminImages/BenjiIdleRight.png')
  leftSprite = loadImage('benjaminImages/BenjiWalkingLeftSpriteSheet.png')
  rightSprite = loadImage('benjaminImages/BenjiWalkingRightSpriteSheet.png')

  idleMush = loadImage('mushroom/mushIdle.png')
  sproutingMush = loadImage('mushroom/mushStatic.png')
  pulseMush = loadImage('mushroom/mushPulse.png')


  startScreen  = loadImage('landscapes/startScreen.png')
  murky = loadImage('landscapes/murky.png')
  murky2 = loadImage('landscapes/murky2Final.png')
}

function startGame(){
  for(let i = 0; i < 12; i++){
    idle[i] = idleSprite.get(i * origImgSize, 0, origImgSize,
                             origImgSize)
  }
  for(let i = 0; i < 12; i++){
    idleRight[i] = idleRightSprite.get(i * origImgSize, 0,
                                  origImgSize,
                                  origImgSize)
  }
  for(let i = 0; i < 4; i++){
    leftWalk[i] = leftSprite.get(i * origImgSize, 0,
                                 origImgSize, origImgSize)
  }
  for(let i = 0; i < 4; i++){
    rightWalk[i] = rightSprite.get(i * origImgSize, 0,
                                   origImgSize, origImgSize)
  }

  // these for loops load the 3 states of the mushrooms

  for (let i = 0; i < 11; i ++) {
    mushSprout[i] = sproutingMush.get(i * origImgSize, 0, origImgSize, origImgSize)
  }

  for (let i = 0; i < 8; i ++) {
    mushPulse[i] = pulseMush.get(i * origImgSize, 0, origImgSize, origImgSize)
  }

  game = new Game(idle, idleRight, leftWalk, rightWalk, 
                  murky, murky2, idleMush, mushSprout, mushPulse)
  game.init()
  loop()
}


function setup(){
  createCanvas(canvasWidth, canvasHeight)
}

function draw(){

  if (game) {
    benPos = game.player.pos.copy()
    //benPos = benjamin.pos.copy()
    scroll = benPos.sub(350, 300) 
  
    if (scroll.x < 0) {
      translate(0, 0) 
    } else if (scroll.x > 700){
      translate(-700, 0) 
    } else {
      translate(-scroll.x, 0) 
    }
  
    moving()

    game.update()
    game.render()

  } else {
    image(startScreen, 0, 0)
    if (mouseClicked()) {
      startGame()
    }
  }
}

function moving() {
    if(keyIsDown(LEFT_ARROW)){
      game.player.move(-1.5, 0)
    }

    if(keyIsDown(RIGHT_ARROW)){
      game.player.move(1.5, 0)
    }
  
    if(keyIsDown(DOWN_ARROW)){
      game.player.move(0, 1.5)
    }
  
    if(keyIsDown(UP_ARROW)){
      game.player.move(0, -1.5)
    }
}

function mouseClicked() {
  if (mouseX < 410 && mouseX > 296 && mouseY > 335 && mouseY < 400 && mouseIsPressed) {
    return true;
  } else {
    return false
  }
}



