


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;

function setup() {
  
  var canvas = createCanvas(480,800);

  Ground = new ground(460,790,480,20);
}
function draw() {

  Ground.display()
 
}