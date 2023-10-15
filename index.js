const canvas = document.querySelector("canvas")
const c = canvas.getContext('2d');

canvas.width = 1024;
canvas.height = 567;

const scaledCanvas = {
    width: canvas.width / 4,
    height: canvas.height / 4
}
const gravity = 0.5;

//2d array
const floorCollisions2D = [];
for (let i = 0; i < floorCollisions.length; i += 36) {
    floorCollisions2D.push(floorCollisions.slice(i, i + 36));
}

const collisionsBlocks = []
floorCollisions2D.forEach((row, y) => {
    row.forEach((symbol, x) => {
        if (symbol == 202) {
            collisionsBlocks.push(new CollisionsBlocks({
                position: {
                    x: x * 16,
                    y: y * 16
                }
            }))
        }
    })
})

const player = new Player({
    x: 0,
    y: 0,
});
const player2 = new Player({
    x: 200,
    y: 100,
});

const background = new Sprite({
    position: {
        x: 0,
        y: 0,
    },
    imageSrc: "./GameAssets/background.png"
});

function animate() {
    window.requestAnimationFrame(animate);

    c.fillStyle = 'white';
    c.fillRect(0, 0, canvas.width, canvas.height);

    c.save();
    c.scale(4, 4);
    c.translate(0, -background.image.height + scaledCanvas.height);
    background.update();
    collisionsBlocks.forEach((collisionsBlock) => {
        collisionsBlock.update();
    })
    c.restore();

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