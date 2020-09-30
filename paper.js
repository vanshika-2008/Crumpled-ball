class Paper{
    constructor(x,y,radius) {
        var options = {
          isStatic = false,
          restitiution =0.3,
          friction = 0.5,
          density = 1.2 
        }
        this.body = Bodies.circles(x,y,radius,options);
        this.radius = radius;
        this.x = x;
        this.y = y;
        World.add(world, this.body);

    }

    display() {
      var paperPos = this.body.position;
       push();
       translate(paperPos.x,paperPos.y);
       strokeWeight(3);
       fill(255,0,255);
       ellipse(0,0,this.radius,this.radius);
       pop();
    }
    
} 