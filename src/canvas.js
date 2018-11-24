import utils from './utils'

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

const snake = {
    x: 50,
    y: 50,
    w: 16,
    h: 16,
    vx: 0,
    vy: 0,
    color: "red"
};

const init = () => {
    document.addEventListener('keydown', ({ keyCode }) => {
        switch(keyCode) {
            case 37:
                snake.vx = -2;
            break;
            case 38:
                snake.vy = -2;
            break;
            case 39:
                snake.vx = 2;
            break;
            case 40:
                snake.vy = 2;
            break;
        }
    }, false);
};


const drawSnake = ({x, y, w, h, color}) => {
    c.beginPath();
    c.rect(x, y, w, h);
    c.fillStyle = color;
    c.fill();
    c.closePath();
};

const canvasClear = () => {
    c.clearRect(0, 0, canvas.width, canvas.height);
}

const draw = () => {
    canvasClear();
    drawSnake(snake);
};

const update = () => {
    snake.x += snake.vx;
    snake.y += snake.vy;
    snake.color = "blue";

}

const mainLoop = () => {
    update();
    draw();
    requestAnimationFrame(mainLoop);
}

init();
mainLoop();

// TODO: while loops and UI in JS
// while(true)
// {   
//     //update();
//     draw();
// }