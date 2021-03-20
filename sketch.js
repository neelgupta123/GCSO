var car , wall

var speed , weight

var deformation

function setup() {
  createCanvas(1280,400);
  car = createSprite(400, 200, 50, 40);
  car.shapeColor="white"

  wall = createSprite(1200,200,60,height/2)  

  speed = random(55,90)
  weight = random(400,1500)

  car.velocityX = speed  
  
  deformation = 0.5 * weight * speed * speed / 22500
  console.log(deformation)
}

function draw() {
  background("black");   

    if(isTouching(car,wall))
    {
      if(deformation<100){
       car.shapeColor="green"
       car.velocityX=0
      }

      else if(deformation>100 && deformation<180){
        car.shapeColor="yellow"
        car.velocityX=0
      }

      else if(deformation>180){
        car.shapeColor="red"
        car.velocityX=0
      }
      else{
        car.shapeColor="white"        
     }
    }      
  drawSprites();
}