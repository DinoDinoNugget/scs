canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");


car1_Width= 120;
car1_Height= 70;
car1_image="car1.png";
car1_X= 10;
car1_Y= 10;


car2_Width= 120;
car2_Height= 70;
car2_image="car2.jpg";
car2_X= 10;
car2_Y=100;
background_image="racing.jpg";
function add() {
    background_imgTag=new Image();
    background_imgTag.onload=uploadBackground;
    background_imgTag.src=background_image;

    car1_imgTag=new Image();
    car1_imgTag.onload=uploadcar1;
    car1_imgTag.src=car1_image;

    car2_imgTag=new Image();
    car2_imgTag.onload=uploadcar2;
    car2_imgTag.src=car2_image;



}
function uploadBackground() {
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}
function uploadcar1() {
    ctx.drawImage(car1_imgTag,car1_X,car1_Y,car1_Width,car1_Height);
}

function uploadcar2() {
    ctx.drawImage(car2_imgTag,car2_X,car2_Y,car2_Width,car2_Height);
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e) {
    keyPressed=e.keyCode;
console.log(keyPressed);
if(keyPressed=='38') {
    car1_up();
}
if(keyPressed=='40') {
    car1_down();
} 
if(keyPressed=='37') {
    car1_left();
} 
if(keyPressed=='39') {
    car1_right();
}
if(keyPressed=='87') {
    car2_up();
}
if(keyPressed=='83') {
    car2_down();
} 
if(keyPressed=='65') {
    car2_left();
} 
if(keyPressed=='68') {
    car2_right();
} 
function car1_up() {
    if (car1_Y>=0) {
        car1_Y= car1_Y - 10;
        console.log("when up arrow is pressed x="+ car1_X +" y= " + car1_Y );
        uploadcar1();
        uploadcar2();
        
    }
}
function car1_down() {
    if (car1_Y<=500) {
        car1_Y= car1_Y + 10;
        console.log("when down arrow is pressed x=" + car1_X + " y= " + car1_Y );
        uploadcar1();
        uploadcar2();
    }
}
function car1_right() {
    if (car1_X<=700) {
        car1_X= car1_X + 10;
        console.log("when right arrow is pressed x=" + car1_X + " y= " + car1_Y );
        uploadcar1();
        uploadcar2();
    }
}
function car1_left() {
    if (car1_X>=0) {
        car1_X= car1_X - 10;
        console.log("when left arrow is pressed x=" + car1_X + " y= " + car1_Y );
        uploadcar1();
        uploadcar2();
    }
}