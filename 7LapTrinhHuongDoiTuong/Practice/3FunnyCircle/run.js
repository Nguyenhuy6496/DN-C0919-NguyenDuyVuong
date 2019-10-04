//hình tròn cố định
/*function createCircle() {
    let ctx = document.getElementById("myCanvas").getContext("2d");
    let circle = new Circle(500, 500, 80);
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0,2*Math.PI);
    ctx.fill();
}

createCircle();*/

//vẽ hình tròn với bán kính ngẫu nhiên
/*function createCircle() {
    let ctx = document.getElementById("myCanvas").getContext("2d");
    let radius = Math.floor(Math.random()*80);
    let circle = new Circle(500,500,radius);
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius,0, 2*Math.PI);
    ctx.fill();
}

createCircle();*/

//vẽ hình tròn với màu + bán kính ngẫu nhiên
/*function getRandomHex() {
    return Math.floor(Math.random() * 255);
}

function getRandomColor() {
    let red = getRandomHex();
    let green = getRandomHex();
    let blue = getRandomHex();
    return "rgb(" + red + "," + blue + "," + green + ")";
}

function createCircle() {
    let ctx = document.getElementById("myCanvas").getContext("2d");
    let radius = Math.round(Math.random() * 200);
    let color = getRandomColor();
    let circle = new Circle(500, 500, radius);
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
}

createCircle();*/

//vẽ hình tròn với vị trí + màu + bán kính ngẫu nhiên
/*function getRandomHex(){
    return Math.floor(Math.random()*255);
}

function getRandomColor(){
    let red = getRandomHex();
    let green = getRandomHex();
    let blue = getRandomHex();
    return "rgb(" + red + "," + blue + "," + green +")";
}

function createCircle(){
    let ctx = document.getElementById("myCanvas").getContext("2d");
    let radius = Math.floor(Math.random() * 80);
    let color = getRandomColor();
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    let circle= new Circle(x, y, radius);
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
}

createCircle();*/

//vẽ 2 hình tròn
/*function getRandomHex(){
    return Math.floor(Math.random()*255);
}

function getRandomColor(){
    let red = getRandomHex();
    let green = getRandomHex();
    let blue = getRandomHex();
    return "rgb(" + red + "," + blue + "," + green +")";
}

function createCircle(){
    let ctx = document.getElementById("myCanvas").getContext("2d");
    let radius = Math.floor(Math.random() * 80);
    let color = getRandomColor();
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    let circle= new Circle(x, y, radius);
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
}

createCircle();
createCircle();*/

//vẽ rất nhiều hình tròn
function getRandomHex(){
    return Math.floor(Math.random()*255);
}

function getRandomColor(){
    let red = getRandomHex();
    let green = getRandomHex();
    let blue = getRandomHex();
    return "rgb(" + red + "," + blue + "," + green +")";
}

function createCircle(){
    let ctx = document.getElementById("myCanvas").getContext("2d");
    let radius = Math.floor(Math.random() * 100);
    let color = getRandomColor();
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    let circle= new Circle(x, y, radius);
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
}

function createMultipleCircle() {
    for(let i=0; i<40; i++){
        createCircle();
    }
}
createMultipleCircle();
