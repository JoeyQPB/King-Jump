const canvas = document.querySelector("canvas")
const c = canvas.getContext('2d');

canvas.height = 567;
canvas.width = 1024;
const gravity = 0.5;

class Player {
    constructor(position, height) {
        this.position = position;
        this.velocity = {
            x: 0,
            y: 1
        }
        this.height = 100;
    }

    draw() {
        c.fillStyle = 'red';
        c.fillRect(this.position.x, this.position.y, 100, this.height);
    }

    update() {
        this.draw();
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;

        if (this.position.y + this.height + this.velocity.y < canvas.height) this.velocity.y += gravity;
        else this.velocity.y = 0;
    }
}

const player = new Player({
    x: 0,
    y: 0,
});
const player2 = new Player({
    x: 200,
    y: 100,
});


function animate() {
    window.requestAnimationFrame(animate);

    c.fillStyle = 'white';
    c.fillRect(0, 0, canvas.width, canvas.height);

    player.update();
    player.velocity.x = 0
    if (keys.ArrowRight.pressed) player.velocity.x = 5;
    else if (keys.ArrowLeft.pressed) player.velocity.x = -5;
}

const keys = {
    ArrowRight: { pressed: false },
    ArrowLeft: { pressed: false },
    ArrowUp: { pressed: false },
}

animate();

window.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowRight':
            keys.ArrowRight.pressed = true;
            break;
        case 'ArrowLeft':
            keys.ArrowLeft.pressed = true;
            break;
        case 'ArrowUp':
            player.velocity.y -= 20;
            break;
    }
})

window.addEventListener('keyup', (event) => {
    console.log(event)
    switch (event.key) {
        case 'ArrowRight':
            keys.ArrowRight.pressed = false;
            break;
        case 'ArrowLeft':
            keys.ArrowLeft.pressed = false;
            break;
    }
})