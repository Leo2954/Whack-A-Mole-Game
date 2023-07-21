let score;
let ballArray = [];
let modX;




function setup()
{
    createCanvas(500, 500);
    //Initializing score and modX (used to create rows and columns)
    score = 0;
    modX = 0;
    //Initializing ballArray and creating six green balls in two rows and three columns
    for (let i = 0; i < 3; i++)
    {

            let temp = new Ball(100 + modX, 250, 0, 255, 0);
            ballArray.push(temp);
            modX += 150;
        
    } 
    modX = 0;
    for(let i =0; i<3; i++)
    {
        let temp = new Ball(100 + modX, 400, 0, 255, 0);
            ballArray.push(temp);
            modX += 150;
        
    }
}


function draw() {
    background(0);
    //Drawing the balls in two rows and three columns
    for(let i = 0; i < ballArray.length; i++)
    {
        fill(ballArray[i].redValue, ballArray[i].greenValue, ballArray[i].blueValue);
        ellipse(ballArray[i].xPos, ballArray[i].yPos, 100, 100);
        
    } 
}

//Ball class
class Ball
{
   constructor(x, y, r, g, b)
   {
        this.xPos = x;
        this.yPos = y;
        this.redValue = r;
        this.greenValue = g;
        this.blueValue = b;
        this.diameter = 100;
   }
// Noah -Check if the ball is clicked and update its position to a random location
checkClicked() {
    let distanceSq = (mouseX - this.xPos) ** 2 + (mouseY - this.yPos) ** 2;
    let radiusSq = (this.diameter / 2) ** 2;
    if (distanceSq < radiusSq) {
      this.xPos = random(this.diameter / 2, width - this.diameter / 2);
      this.yPos = random(this.diameter / 2, height - this.diameter / 2);
    }
  }
}

  function showMole(){
    let ball = randomBall(balls);


    let duration = randomTime(1000,3000);
    setTimeout() = {

    }
  }

function mouseClicked () {
    if (mouseX > 0 && mouseX < 100 && mouseY > 0 && mouseY < 100) {
        
    }
}