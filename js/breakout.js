rulesBtn = document.getElementById('rules-btn')
rules = document.getElementById('rules')
closeBtn = document.getElementById('close-btn')
canvas = document.getElementById('canvas')
ctx = canvas.getContext('2d')

score = 0

brickRowCount = 9
brickColumnCount = 5

ball = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    size: 10,
    speed: 4,
    dx: 4,
    dy: -4,
}

paddle = {
    x: canvas.width / 2 - 40,
    y: canvas.height - 20,
    w: 80,
    h: 10,
    speed: 8,
    dx: 0,
}

brickInfo = {
    w: 70,
    h: 20,
    padding: 10,
    offsetX: 45,
    offsetY: 60,
    visible: true
}

bricks = []
for(let i = 0; i < brickRowCount; i++) {
    bricks[i] = []
    for (let j = 0; j < brickColumnCount; j++){
        const x = i * (brickInfo.w + brickInfo.padding) + brickInfo.offsetX
        const y = j * (brickInfo.h + brickInfo.padding) + brickInfo.offsetY
        bricks[i][j] = {x, y, ...brickInfo}
    }
}

function drawBall () {
    ctx.beginPath()
    ctx.arc(ball.x, ball.y, ball.size, 0,  Math.PI * 2);
    ctx.fillStyle = 'rgb(182, 208, 226)'
    ctx.fill()
    ctx.closePath()
}

function drawPaddle () {
    ctx.beginPath()
    ctx.rect(paddle.x, paddle.y, paddle.w, paddle.h)
    ctx.fillStyle =  'rgb(182, 208, 226)'
    ctx.fill()
    ctx.closePath()
}

function drawScore() {
    ctx.font='20px Arial'
    ctx.fillText(`Score: ${score}`, canvas.width-100, 30)
}

function drawBricks() {
    bricks.forEach(column => {
        column.forEach(brick => {
            ctx.beginPath()
            ctx.rect(brick.x, brick.y, brick.w, brick.h)
            ctx.fillStyle = brick.visible ?  'rgb(182, 208, 226)' : 'transparent';
            ctx.fill()
            ctx.closePath()
        })
    })
}

console.log(bricks)

function draw() {
    drawPaddle()
    drawBall()
    drawScore()
    drawBricks()
}

//keydown Event
function keyDown(e){
    //console.log(e.key)
    if (e.key == 'ArrowRight' || e.key == 'left') {
        paddle.dx = -paddle.speed
    }
}

function keyDown(e){
    //console.log(e.key)
    if (e.key == 'ArrowRight' || e.key == 'Right' || e.key ==) {
        paddle.dx = -paddle.speed
    }
}

function draw() {

}

//move paddle on canvas
function movePaddle () {
    paddle.x = paddle.x + paddle.dx
}

//keyboard event handlers
document.addEventListener('keydown', keyDown)
document.addEventListener('keyup', keyUp)



function update () {

    draw()
    requestAnimationFrame(update)
}

update()



rulesBtn.addEventListener('click', () => {
    rules.classList.add('show')
})

closeBtn.addEventListener('click', () => {
    rules.classList.remove('show')
})