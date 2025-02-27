class Ball {

    constructor(x, y){
        this.x = x;
        this.y = y;
        this.radio = 5;
        this.dirX = (Math.random() * 2) - 1;
        this.dirY = (Math.random() * 2) - 1;
        this.speed = 5;
    }

    draw(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radio, 0, Math.PI * 2);

        ctx.fillStyle = "black";
        ctx.fill();
        ctx.closePath();
        console.log("si esta dibujando");
    }

    move(){
        this.x += this.dirX * this.speed;
        this.y += this.dirY * this.speed;

        if(this.x + this.radio > canvas.width || this.x < 0){
            this.dirX *= -1;
        }

        if(this.y + this.radio > canvas.height || this.y < 0){
            this.dirY *= -1;
        }
    }
}