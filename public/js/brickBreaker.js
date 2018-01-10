function playGame() {
    var ball = {};
    let canvasX = document.getElementById('brickBreaker').clientWidth;
    let canvasY = document.getElementById('brickBreaker').clientHeight;
    let canvas = document.getElementById('brickBreaker');
    let ctx = canvas.getContext("2d");
    var paddle = {};
    var brickItem = {
        brickX: 0,
        brickY: 0,
        brickWidth: +(canvasX / 8) - +1,
        brickHeight: +(canvasY / 16) - +1,
    };

    paddle.xPos = canvasX / 2;
    paddle.padWidth = 50;
    paddle.padHeight = 2;
    paddle.colour = "#112233";
    brickItem.brickX = 0;
    brickItem.brickY = 0;

    var listOfBricks = [];

    let initialBrickX = 1;
    let initialBrickY = 1;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (i = 0; i < 5; i++) {
        for (j = 0; j < 8; j++) {
            ctx.fillStyle = brickItem.colour;
            ctx.fillRect(initialBrickX, initialBrickY, brickItem.brickWidth,  brickItem.brickHeight);

            initialBrickX += brickItem.brickWidth + 1;
        }
        initialBrickX = 1;
        initialBrickY += brickItem.brickHeight + 1;
    }

}
