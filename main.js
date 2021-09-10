objects=[];
status1="";

function preload(){
video=createVideo("");
}

function setup(){
canvas=createCanvas(480,380);
canvas.center();
video.hide();
}

function start(){
objectdetector=ml5.objectDetector("cocossd",modaloaded);
document.getElementById("status1").innerHTML="Status = Detecting Objects"
}

function modaloaded(){
console.log("Moadl is Loaded");
status1=true;
video.speed(1);
video.volume(1);
}