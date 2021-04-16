function preload(){
}

function setup(){
    canvas=createCanvas(500, 500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 100, 100, 300, 300)
    fill("cyan")
    stroke("black")
    circle(60 , 60, 100)
    circle(440 , 60, 100)
    circle(60 , 440, 100)
    circle(440 , 440, 100)
    fill("red")
    stroke("yellow")
    rect(110, 30, 280, 50)
    rect(110, 420, 280, 50)
    rect(30, 110, 50, 280)
    rect(420, 110, 50, 280)

}
function take_snapshot(){
    save("snapshot.png");
}