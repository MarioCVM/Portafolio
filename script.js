const canvas = document.getElementById("main");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = window.innerHeight;

let balls = [];

for (let i = 0; i < 60; i++) {
    balls.push(new Ball(canvas.width / 2, canvas.height / 2));
    
}


function animation(){

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    balls.forEach(ball => {

        balls.forEach(targetBall => {

            let dx = targetBall.x - ball.x;
            let dy = targetBall.y - ball.y;
            let distance = Math.sqrt(dx ** 2 + dy ** 2);

            if(distance < 200){
                ctx.beginPath();
                ctx.moveTo(ball.x, ball.y);
                ctx.lineTo(targetBall.x, targetBall.y);
                ctx.stroke();
                ctx.closePath();
            }
        });

        ball.draw();
        ball.move();
    });

    requestAnimationFrame(animation);
}

animation();