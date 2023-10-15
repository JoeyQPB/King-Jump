class CollisionsBlocks {
    constructor({ position }) {
        this.position = position;
        this.width = 16;
        this.height = 16;
    }

    draw() {
        c.fillStyle = "red";
        c.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    update() {
        this.draw();
    }
}