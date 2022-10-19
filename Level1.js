class Level1 {
    constructor(player, backdrop1, backdrop2, idleMush, mushSprout, mushPulse, 
        canvasWidth, canvasHeight, imgSize) {
        this.mushrooms = []
        // array of booleans telling whether the mushroom has sprouted yet
        this.interact = []
        this.player = player
        this.backdrop1 = backdrop1
        this.backdrop2 = backdrop2
        this.idleMush = idleMush
        this.mushSprout = mushSprout
        this.mushPulse = mushPulse
        this.canvasWidth = canvasWidth
        this.canvasHeight = canvasHeight
        this.imgSize = imgSize

    }

    init() {
        mushrooms[0] = new Mushroom(idleMush, mushSprout, mushPulse, canvasWidth/2 - 170, 
    canvasHeight/2 + 130, imgSize)
        mushrooms[1] = new Mushroom(idleMush, mushSprout, mushPulse, canvasWidth/3 - 270, 
    canvasHeight/2 + 85, imgSize)
        mushrooms[2] = new Mushroom(idleMush, mushSprout, mushPulse, canvasWidth/2 + 70, 
    canvasHeight/2 + 150, imgSize) 
        mushrooms[3] = new Mushroom(idleMush, mushSprout, mushPulse, canvasWidth/2 + 185, 
    canvasHeight/2 + 115, imgSize)
        mushrooms[4] = new Mushroom(idleMush, mushSprout, mushPulse, canvasWidth + 30, 
    canvasHeight/2 + 80, imgSize)
        mushrooms[5] = new Mushroom(idleMush, mushSprout, mushPulse, canvasWidth + 150, 
    canvasHeight/2 + 140, imgSize)
        mushrooms[6] = new Mushroom(idleMush, mushSprout, mushPulse, canvasWidth + 270, 
    canvasHeight/2 + 20, imgSize)
        mushrooms[7] = new Mushroom(idleMush, mushSprout, mushPulse, canvasWidth + 340, 
    canvasHeight/2, imgSize)
        mushrooms[8] = new Mushroom(idleMush, mushSprout, mushPulse, canvasWidth + 400, 
    canvasHeight/2 + 120, imgSize)
        mushrooms[9] = new Mushroom(idleMush, mushSprout, mushPulse, canvasWidth + 570, 
    canvasHeight/2 + 60, imgSize)

    // for (let i = 0; i < 10; i ++) {
    //     this.interact[i] = this.mushrooms[i].interacted
    // }

    }

    render() {
        image(this.backdrop1, 0, 0)
        image(this.backdrop2, 700, 0)

        mushrooms.forEach(mush => {
            mush.collide(this.player)
            mush.update()
            mush.render()
          });

    }

}