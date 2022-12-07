noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristY = 0;
function setup(){
    canvas = createCanvas(700,450);
    canvas.position(600,200);
    video = createCapture(VIDEO);
    video.size(550,500);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw(){
    background("#808080");
    fill("0080FF");
    stroke("0080FF");
    square(noseX, noseY, 100);
    document.getElementById("result_span").innerHTML = "Width and the height of the square :" + difference + "px";
}
function modelLoaded(){
    console.log("PoseNet is Instalized");
}
function gotPoses(){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("X postion of the Nose is" + noseX);
        console.log("Y position of the Nose is" + noseY);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = leftWristX - rightWristX;
        difference = floor(leftWristX - rightWristX);
        console.log("leftWristX = " + leftWristX + ",rightWristX = " + rightWristX + ",difference = " + difference);
    }
}
