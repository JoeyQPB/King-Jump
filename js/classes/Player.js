class Player {
    constructor({ position, collisionsBlocks }) {
        this.position = position;
        this.velocity = {
            x: 0,
            y: 1
        }
        this.height = 25;
        this.width = 25;
        this.collisionsBlocks = collisionsBlocks;
    }

    draw() {
        c.fillStyle = 'red';
        c.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    update() {
        this.draw();
        this.position.x += this.velocity.x;
        this.checkForHorizontalCollisions();
        this.applyGravity();
        this.checkForVerticalCollisions();
    }

    checkForHorizontalCollisions() {
        for (let i = 0; i < this.collisionsBlocks.length; i++) {
            const collisionsBlock = this.collisionsBlocks[i];

            if (collision({ object1: this, object2: collisionsBlock })) {
                if (this.velocity.x > 0) {
                    this.velocity.x = 0;
                    this.position.x = collisionsBlock.position.x - this.width - 0.01;
                    break;
                }

                if (this.velocity.x < 0) {
                    this.velocity.x = 0;
                    this.position.x = collisionsBlock.position.x + collisionsBlock.width + 0.01;
                    break;
                }
            }
        }
    }

    applyGravity() {
        this.position.y += this.velocity.y;
        this.velocity.y += gravity;
    }

    checkForVerticalCollisions() {
        for (let i = 0; i < this.collisionsBlocks.length; i++) {
            const collisionsBlock = this.collisionsBlocks[i];

            if (collision({ object1: this, object2: collisionsBlock })) {
                if (this.velocity.y > 0) {
                    this.velocity.y = 0;
                    this.position.y = collisionsBlock.position.y - this.height - 0.01;
                    break;
                }

                if (this.velocity.y < 0) {
                    this.velocity.y = 0;
                    this.position.y = collisionsBlock.position.y + collisionsBlock.height + 0.01;
                    break;
                }
            }
        }
    }
}