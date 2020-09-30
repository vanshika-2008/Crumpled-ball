class Dustbin {
    constructor(x,y) {
  var options ={
    isStatic : true
      
  }
    this.x = x;
    this.y = y;
    this.width = 200;
    this.height = 100;
    this.angle = 0;
    this.thickness = 20;
    this.bottomBody = Bodies.rectangle(this.x,this.y,this.width,this.thickness,options);
    
    World.add(world,this.bottomBody);

    this.LeftBody = Bodies.rectangle(this.x-50,this.y-50,this.width,this.height,this.thickness,options);
    
    World.add(world,this.LeftBody);

    this.RightBody = Bodies.rectangle(this.x+50,this.y+50,this.width,this.height,this.thickness,options);
    
    World.add(world,this.RightBody);

  }

  display() {
    var Bpos = this.bottomBody.position;
    var Lpos = this.LeftBody.position;
    var Rpos = this.RightBody.position;
     push();
     translate(Bpos.x,Bpos.y);
     stroke(255);
     fill(255);
     rect(0,0,this.width,this.thickness);
     pop();

     push();
     translate(Lpos.x,Lpos.y);
     stroke(255);
     fill(255);
     rect(0,0,this.thickness,this.height);
     pop();

     push();
     translate(Rpos.x,Rpos.y);
     stroke(255);
     fill(255);
     rect(0,0,this.thickness,this.height);
     pop();





    }
}