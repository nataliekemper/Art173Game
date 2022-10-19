class Game {
    constructor(idle, idleRight, leftWalk, rightWalk, backdrop1, backdrop2, idleMush, 
      mushSprout, mushPulse){
    this.player = null
    this.levels = []
    this.level = null
    this.currentLevel = 0
    this.idle = idle
    this.idleRight = idleRight
    this.leftWalk = leftWalk
    this.rightWalk = rightWalk
    this.backdrop1 = backdrop1
    this.backdrop2 = backdrop2
    this.idleMush = idleMush
    this.mushSprout = mushSprout
    this.mushPulse = mushPulse
    this.canvasWidth = 700
    this.canvasHeight = 500
    this.imgSize = 150
  }
  
  init(){
    this.player = new BenjaminSprite(this.idle, this.idleRight, this.leftWalk, this.rightWalk, this.canvasWidth/2,
                                     this.canvasHeight/2 + 130, this.imgSize)

    this.levels[0] = new Level1(this.player, this.backdrop1, this.backdrop2, 
                                this.idleMush, this.mushSprout, this.mushPulse, this.canvasWidth, 
                                this.canvasHeight, this.imgSize)
    //this.levels[1] = new level2()

    this.levels[0].init()

    this.level = this.levels[this.currentLevel]
  }
  
  nextLevel() {
    this.currentLevel ++
    this.level = this.levels[this.currentLevel]
  }
  
  
  
  render(){
    this.level.render()
    this.player.render()
  }
  
  update(){
    this.player.update()
  }
}


    
