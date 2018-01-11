let xVelocity = 1;
let yVelocity = 0;
let isRunning = false;
document.onkeydown = keyPush;

function playGame() {
    if (!isRunning) {
        isRunning = true;
        let canvas = document.getElementById("snakes-canvas");
        let ctx = canvas.getContext("2d");
        let itemWidth = canvas.height / 25;

        let snake = [];
        for (i = (itemWidth * 10); i <= (itemWidth*10) + (itemWidth * 5); i += itemWidth) {
            snake.push(new SnakeObject((itemWidth * 10), i));
        }

        window.setInterval(pGame, 200);

        function SnakeObject(x, y) {
            this.xPos = x;
            this.yPos = y;
        }

        function pGame() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = "#000000";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = "#1FFF1F";
            for (i = 0; i < snake.length; i++) {
                ctx.fillRect(snake[i].xPos, snake[i].yPos, itemWidth, itemWidth);
            }

            let newX = snake[0].xPos + (xVelocity * itemWidth);
            let newY = snake[0].yPos + (yVelocity * itemWidth);

            if (newX > canvas.width+1) newX -= canvas.width;
            if (newY > canvas.height+1) newY -= canvas.height;
            if (newX < -1) newX += canvas.width;
            if (newY < -1) newY += canvas.height;

            snake.unshift(new SnakeObject(newX, newY));
            snake.splice(-1, 1);
        }
    }
}

function keyPush(key) {
    switch (key.keyCode) {
        case 37: // Left arrow
            if (xVelocity !==1) {
                xVelocity = -1;
                yVelocity = 0;
            }
            break;
        case 38: // Up arrow
            if (yVelocity!==1) {
                xVelocity = 0;
                yVelocity = -1;
            }
            break;
        case 39: // Right arrow
            if (xVelocity!==-1) {
                xVelocity = 1;
                yVelocity = 0;
            }
            break;
        case 40: // Down arrow
            if (yVelocity !==-1) {
                xVelocity = 0;
                yVelocity = 1;
            }
            break;
        case 116:
            location.reload();
            break;
        default:
            break;
    }
    key.preventDefault();
}