const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

let gravity = 0.5
let friction = 0.99

let colors = ["red", "blue", "green", "purple", "yellow"];

function ballColor() {
    let color = colors[Math.floor(Math.random() * colors.length)]
    if(color == "red"){
        return ["red", 10]
    }else if(color == "blue"){
        return ["blue", 10]
    }else if(color == "green"){
        return ["green", 10]
    }else if(color == "purple"){
        return ["purple", 10]
    }else if(color == "yellow"){
        return ["yellow", 10]
    }
}

let balls = []

function drag(e) {
    let mouseX = e.clientX
    let mouseY = e.clientY
    for (let i = 0; i < balls.length; i++) {
        let ball = balls[i]
        if (mouseX > ball.x - ball.radius && mouseX < ball.x + ball.radius && mouseY > ball.y - ball.radius && mouseY < ball.y + ball.radius) {
            ball.x = mouseX
            ball.y = mouseY

            ball.vx = (ball.x - ball.x)
            ball.vy = (ball.y - ball.y)
        }
    }
}

function mouseDown() {
    canvas.addEventListener("mousemove", drag)
    requestAnimationFrame(mouseDown)
}

function mouseUp() {
    requestAnimationFrame(mouseUp)

    canvas.removeEventListener("mousemove", drag)
}

function mouseClick() {
    let colorRadius = ballColor()
    let radius = colorRadius[1]
    let color = colorRadius[0]
    let ball = {
        x: 50,
        y: 50,
        vx: Math.random() - 0.5,
        vy: Math.random() - 0.5,
        radius: radius,
        color: color
    }
    balls.push(ball)
}

setInterval(mouseClick, 1000)

// canvas.addEventListener("click", mouseClick)

function draw() {
    for (let i = 0; i < balls.length; i++) {
        let ball = balls[i]
        ctx.beginPath()
        ctx.arc(ball.x, ball.y, ball.radius, 0, 2 * Math.PI)
        ctx.fillStyle = ball.color
        ctx.fill()
    }
}

draw()

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    for (let i = 0; i < balls.length; i++) {
        let ball = balls[i]
        ball.x += ball.vx
        ball.y += ball.vy
        ball.vy += gravity
        ball.vx *= friction
    }
    

    draw()
    box()
    

    for (let i = 0; i < balls.length; i++) {
        for (let j = i + 1; j < balls.length; j++) {
            ballCollide(balls[i], balls[j])
        }
    }

    requestAnimationFrame(update)
}

function mouseMove(e) {
    x = e.clientX
    y = e.clientY
}

canvas.addEventListener("mousemove", mouseMove)

function box() {
    for (let i = 0; i < balls.length; i++) {
        let ball = balls[i]
        if (ball.x - ball.radius < 0) {
            ball.x = ball.radius
            ball.vx *= -0.5
        }
        if (ball.x + ball.radius > canvas.width) {
            ball.x = canvas.width - ball.radius
            ball.vx *= -0.5
        }
        if (ball.y - ball.radius < 0) {
            ball.y = ball.radius
            ball.vy *= 0.5
        }
        if (ball.y + ball.radius > canvas.height) {
            ball.y = canvas.height - ball.radius
            ball.vy *= -0.2
        }
    }
}

function ballHitbox(ball1, ball2) {
    let dx = ball1.x - ball2.x
    let dy = ball1.y - ball2.y
    let distance = Math.hypot(dx, dy)
    return distance < ball1.radius + ball2.radius
}

function ballCollide(ball1, ball2) {
    if (ballHitbox(ball1, ball2)) {

        if(ball1.color == ball2.color){
            ball1.radius += ball2.radius

            balls.splice(balls.indexOf(ball2), 1)
        }

        let dx = ball1.x - ball2.x
        let dy = ball1.y - ball2.y
        let distance = Math.hypot(dx, dy)
        let angle = Math.atan2(dy, dx)
        let force = (ball1.radius + ball2.radius) / distance
        let vx = Math.cos(angle) * force
        let vy = Math.sin(angle) * force
        ball1.vx += vx
        ball1.vy += vy
        ball2.vx -= vx
        ball2.vy -= vy
    }
}

function resize() {
    canvas.width = innerWidth
    canvas.height = innerHeight
}
window.addEventListener("resize", resize)

update()