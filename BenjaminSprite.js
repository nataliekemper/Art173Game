class BenjaminSprite {
    constructor(idleLeft, idleRight, left, right, x, y, size,
                 mapSize){
        this.idleLeft = idleLeft
        this.idleRight = idleRight
        this.left = left
        this.right = right
        this.imgCount = 0
        this.imgSize = size
        this.mapSize = mapSize
        this.pos = createVector(x, y)
        this.vel = createVector(0,0)  
        this.acc = createVector(0,0)
        this.friction = 0.7
        // -2 = walking left, -1 = idle left, 
        // 1 = idle right, 2 = walking right
        this.dir = -1
    }

    bounceEdges() {
    if(this.pos.x < -this.mapSize - this.imgSize/3 || 
       this.pos.x > this.mapSize - this.imgSize/3) {
      this.vel.x *= 0
      this.acc.mult(0)
    }
    if(this.pos.y < -this.mapSize - this.imgSize/3 || this.pos.y
       > this.mapSize - this.imgSize/3) {    
      this.vel.y *= 0
      this.acc.mult(0)
    }
}

    move(x, y){
        //console.log('moving: ', x, y)
        this.acc.add(x, y)
        this.vel.add(this.acc)
        this.acc.mult(0)
    }

    render(){
      if (keyIsDown(LEFT_ARROW)) {
        this.dir = -2
        image(this.left[floor(this.imgCount) %
                        this.left.length], this.pos.x,
              this.pos.y, this.imgSize,
              this.imgSize)
      } else if (keyIsDown(RIGHT_ARROW)) {
        this.dir = 2
        image(this.right[floor(this.imgCount) %
                        this.right.length], this.pos.x,
             this.pos.y, this.imgSize,
             this.imgSize)
      } else if (this.dir == 2) {
        image(this.idleRight[floor(this.imgCount) % 
                          this.idleRight.length],
                this.pos.x, this.pos.y, this.imgSize, 
                this.imgSize)
      } else {
        image(this.idleLeft[floor(this.imgCount) % 
                          this.idleLeft.length],
                this.pos.x, this.pos.y, this.imgSize, 
                this.imgSize)
      }
    }

    collide(ob) {
      let d = this.pos.dist(ob.pos)
      if (d < 50) {
        ob.clicked = true;
      }
    }
  
    update(){
      this.vel.mult(this.friction)
      this.pos.add(this.vel)
      this.imgCount+= 0.165
    }
}