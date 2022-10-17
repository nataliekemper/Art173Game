class Game {
    constructor(){
    this.player = null
    this.levels = []
    this.currentLevel = 0
  }
  
  init(){
    this.level = this.levels[this.currentLevel]
    
    this.levels[0] = new Level1()
    this.levels[1] = new level2()

    this.levels[0].init()
    
    
    
    this.player = new BenjaminSprite(idle, leftWalk, rightWalk, width/2 - 100,
                                     height/2 - 100, imgSize)
  }
  
  nextLevel() {
    this.currentLevel ++
    this.level = this.levels[this.currentLevel]
  }
  
  
  
  
  end = () => {
    // draw whoops text and then back to start screen
    this.drawWhoops = true
    setTimeout(() => { this.over = true}, 2000)  
  }
  
  render(){
    fill(this.bgCol)
    stroke(this.wallCol)
    strokeWeight(this.wallWidth)
    rect(-mapSize/2 + 50, -mapSize/2 + 50, mapSize - 100,
         mapSize - 100)
    this.player.render()
    //this.scoreboard.render()
  }
  
  update(scroll){
    this.player.checkWalls()  
    this.player.update()
    
  }
}


    
