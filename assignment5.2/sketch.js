let particlesBryan =[]; //array for particle system

//https://www.youtube.com/watch?v=IPF5lhgoRWM

class BryanParticle{
  constructor(x,y){
    this.x=x
    this.y=y
    this.vx=random(-2,2) //random velocity of x value
    this.vy=random(-2,2) //random y velocity?
    this.lifetime=255  //give each particle a timer to fade.out? but dont fully understand
  }
  update()
  {
    this.x+=this.vx
    this.y+=this.vy
    this.lifetime-=1
  }
  show()
  {
    noStroke()
    fill(1400,this.lifetime,100)
    ellipse(this.x,this.y,5,2)
    ellipse(this.x,this.y,0.5,this.lifetime) //using the this.lifetime as the x or y of the ellipses to cause this increasing factor over time?
  }
  isDead()
  {
    return this.lifetime<0;
  } 
}

function setup() 
{
  createCanvas(400, 400);
  background(0);
  //colorMode(HSB);
}

function draw() {
  background(0,30)

  //particle emmitter. with i being the number of times loop has happened
  //i++ means loop/i goes up in 1 increment and stops looping at 5?
  for(let i=0;i<5;i++) //for loop where loop continues as long as i is less than 5
  {
    particlesBryan.push(new BryanParticle(width/2,height/2));
  }

  for(let i = 0;i<particlesBryan.length;i++)
  {
    particlesBryan[i].update()
    particlesBryan[i].show()

    if(particlesBryan[i].isDead())
    {
      particlesBryan.splice(i,1);
    }
  }

}
