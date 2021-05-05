const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16;
var polygon;
var slingShot;
var score=0;

var ground;
var bg="sprites/bg.png"
var engine,world;

function preload(){
    backgroundImg=loadImage("sprites/bg.png")
    getBackgroundImage();
}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    b1= new Box(330,285,30,40)
    b2= new Box(360,285,30,40)
    b3= new Box(390,285,30,40)
    b4= new Box(420,285,30,40)
    b5= new Box(450,285,30,40)
    b6= new Box(480,285,30,40)
    b7= new Box(510,285,30,40)

    b8= new Box(330,235,30,40)
    b8= new Box(360,235,30,40)
    b9= new Box(390,235,30,40)
    b10= new Box(420,235,30,40)
    b11= new Box(450,235,30,40)
    b12= new Box(480,235,30,40)

    b13= new Box(360,195,30,40)
    b14= new Box(390,195,30,40)
    b15= new Box(420,195,30,40)

    b16= new Box(390,155,30,40)

    polygon= new Polygon(250,50)

    slingshot= new SlingShot(polygon.body,{x:250, y:50})

    ground= new Ground(600,390,1200,20)
}

function draw(){
    background("white")
   if(backgroundImg){
     background(backgroundImg);
   }

   fill("white")
    textSize(35)
    noStroke()
    text("score "+score,width-300,50)

    
    
    Engine.update(engine)
    b1.display()
    b2.display()
    b3.display()
    b4.display()
    b6.display()
    b7.display()
    b8.display()
    b9.display()
    b10.display()
    b11.display()
    b12.display()
    b13.display()
    b14.display()
    b15.display()
    b16.display()
    polygon.display()
    slingshot.display()
    ground.display()

    b1.score()
    b2.score()
    b3.score()
    b4.score()
    b5.score()
    b6.score()
    b7.score()
    b8.score()
    b9.score()
    b10.score()
    b10.score()
    b12.score()
    b13.score()
    b14.score()
    b15.score()
    b16.score()
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode===32){
        Matter.Body.setPosition(polygon.body,{x:250,y:50})
        slingshot.attach(polygon.body)
    }
}

async function getBackgroundImage(){
    var response= await fetch("http://worldclockapi.com/api/json/est/now");  
    var responseJSON=await response.json()
    console.log(responseJSON)
      
    var date=responseJSON.datetime;
    console.log(date);
    var hour=date.slice(11,13);
    console.log(hour)

    if(hour>=06 && hour<=19){
        bg="sprites/bg.png"
    }
    else{
        bg="sprites/bg2.jpg"
    }
    backgroundImg=loadImage(bg)
}