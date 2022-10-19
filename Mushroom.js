class Mushroom {
    constructor(idle, sprouting, pulse, x, y, size, mapSize) {
        this.idle = idle
        this.sprouting = sprouting
        this.pulse = pulse
        this.pos = createVector(x, y)
        this.size = size
        this.mapSize = mapSize
        this.clicked = false
        this.imgCount = 0
        this.time = false
        this.interacted = false
    }

render() {
    if (this.clicked && this.time) {
        setTimeout(this.time = false, 150)
        image(this.sprouting[floor(this.imgCount) % this.sprouting.length], 
        this.pos.x, this.pos.y, this.size, this.size)
    } else if(!this.clicked) {
        image(this.idle, this.pos.x, this.pos.y, this.size, this.size)
    } else {
        image(this.pulse[floor(this.imgCount) % this.pulse.length], 
        this.pos.x, this.pos.y, this.size, this.size)
    }
}

keyPressed() {
    if (keyCode == 32) {
        return true;
    } else {
        return false;
    }
}

collide(ob) {
    let d = this.pos.dist(ob.pos)
    if (d < 50 && this.keyPressed()) {
      this.clicked = true;
      this.time = true;
      this.interacted = true;
    }
  }

update() {
    this.imgCount += 0.1
}

}