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
let sky, murky, murky2

let mushrooms = []


function preload() {
  idleSprite = loadImage('benjaminImages/BenjaminIdleSpriteSheet.png')
  idleRightSprite = loadImage('benjaminImages/BenjiIdleRight.png')
  leftSprite = loadImage('benjaminImages/BenjiWalkingLeftSpriteSheet.png')
  rightSprite = loadImage('benjaminImages/BenjiWalkingRightSpriteSheet.png')

  idleMush = loadImage('mushroom/mushIdle.png')
  sproutingMush = loadImage('mushroom/mushStatic.png')
  pulseMush = loadImage('mushroom/mushPulse.png')

  sky = loadImage('pixil-frame-0.png')
  murky = loadImage('landscapes/murky.png')
  murky2 = loadImage('landscapes/murky2Final.png')
}


function setup(){
  createCanvas(canvasWidth, canvasHeight)
  
  // these for loops load the 4 states of the sprite i.e.
  // left, right, and both idles
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
    
  // loads the sprite, benjamin is here!
  benjamin = new BenjaminSprite(idle, idleRight, leftWalk,
                                rightWalk,
                                canvasWidth/2, canvasHeight/2 + 130,
                                imgSize, mapSize)
  

  // This is a super brute force way of doing it but this is the only way i can 
  // specify the location of each mushroom with the most precision
  mushrooms[0] = new Mushroom(idleMush, mushSprout, mushPulse, canvasWidth/2 - 170, 
    canvasHeight/2 + 130, imgSize, mapSize)
  mushrooms[1] = new Mushroom(idleMush, mushSprout, mushPulse, canvasWidth/3 - 270, 
    canvasHeight/2 + 85, imgSize, mapSize)
  mushrooms[2] = new Mushroom(idleMush, mushSprout, mushPulse, canvasWidth/2 + 70, 
    canvasHeight/2 + 150, imgSize, mapSize)  
  mushrooms[3] = new Mushroom(idleMush, mushSprout, mushPulse, canvasWidth/2 + 185, 
    canvasHeight/2 + 115, imgSize, mapSize) 
  mushrooms[4] = new Mushroom(idleMush, mushSprout, mushPulse, canvasWidth + 30, 
    canvasHeight/2 + 80, imgSize, mapSize)
  mushrooms[5] = new Mushroom(idleMush, mushSprout, mushPulse, canvasWidth + 150, 
    canvasHeight/2 + 140, imgSize, mapSize)
  mushrooms[6] = new Mushroom(idleMush, mushSprout, mushPulse, canvasWidth + 270, 
    canvasHeight/2 + 20, imgSize, mapSize)
  mushrooms[7] = new Mushroom(idleMush, mushSprout, mushPulse, canvasWidth + 340, 
    canvasHeight/2, imgSize, mapSize)
  mushrooms[8] = new Mushroom(idleMush, mushSprout, mushPulse, canvasWidth + 400, 
    canvasHeight/2 + 120, imgSize, mapSize)
  mushrooms[9] = new Mushroom(idleMush, mushSprout, mushPulse, canvasWidth + 570, 
    canvasHeight/2 + 60, imgSize, mapSize)
}

function draw(){
  benPos = benjamin.pos.copy()
  scroll = benPos.sub(350, 300) 
  
  if (scroll.x < 0) {
    translate(0, 0) 
  } else if (scroll.x > 700){
    translate(-700, 0) 
  } else {
    translate(-scroll.x, 0) 
  }
  
  background(255)
  
  moving()
  image(murky, 0, 0)
  image(murky2, 700, 0)

  mushrooms.forEach(mush => {
    mush.collide(benjamin)
    mush.update()
    mush.render()
  });

  benjamin.update()
  benjamin.bounceEdges()
  benjamin.render()
}

function moving(){
    if(keyIsDown(LEFT_ARROW)){
        benjamin.move(-1.5, 0)
    }

    if(keyIsDown(RIGHT_ARROW)){
        benjamin.move(1.5, 0)
    }
  
    if(keyIsDown(DOWN_ARROW)){
        benjamin.move(0, 1.5)
    }
  
    if(keyIsDown(UP_ARROW)){
        benjamin.move(0, -1.5)
    }
}



