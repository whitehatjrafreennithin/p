rightWristX = 0;
leftWristX = 0;
noseX = 0;
noseY = 0;
difference = 0;










function setup() {
    video = createCapture(VIDEO);
video.size(550,500)
canvas = createCanvas(550, 450);
canvas.position(560, 130);


poseNet = ml5.poseNet(video, modelLoaded)
poseNet.on("pose", gotPoses)

}

function modelLoaded() {
    console.log("Model Loaded")
}

function gotPoses(results) {
    if(results.length>0){
        console.log(results)

        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;

        rightWristX = results[0].pose.rightWrist.x;
        leftWristX = results[0].pose.leftWrist.x;
        difference = floor(leftWristX - rightWristX);
    }
}

function draw() {
    background("coral")
fill("blue");
stroke("blue");
    square(noseX, noseY, difference);
    document.getElementById("square_side").innerHTML = "Width and Height of the square will be " + difference + " Pixels"
    
}