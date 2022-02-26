noseX=0;
noseY=0;
leftWristX=0;
rightWristX=0;
difference=0;
function setup() {
Canvas=createCanvas(550,550);
Canvas.position(560,150);
video=createCapture(VIDEO);
video.size(550,500);
poseNet=ml5.poseNet(video, modelloaded);
poseNet.on('pose', gotPoses);
}
function modelloaded(){
    console.log("posenet is initialized")
}
function draw(){
 background("blue");
fill("yellow");
stroke("yellow");
square(noseX,noseY,difference);
document.getElementById("square_sides").innerHTML="width and height of a square will be = "+difference+ " px";
}
function gotPoses(results){
  if(results.length>0){
      console.log(results);
  noseX= results[0].pose.nose.x;
  noseY= results[0].pose.nose.y;
  console.log("noseX= "+noseX +"noseY= "+ noseY);
  leftWristX= results[0].pose.leftWrist.x;
  rightWristX= results[0].pose.rightWrist.x;
console.log("leftWristX= " +leftWristX+"rightWristX= "+rightWristX);
difference= floor(leftWristX-rightWristX);
console.log("differnce="+difference);
    }  
}