class Drop {

  constructor(x, y, radius) {
      var options={
       restitution: 0.1,
       friction: 0.1
    };
    this.body = Bodies.ellipse(x, y,radius, options);
    this.width = radius;
    this.height = radius;
    World.add(world,this.body);
  }
  display(){
    var pos = this.body.position;
    fill("blue");
    ellipseMode(CENTER);
    ellipse(pos.x, pos.y, this.radius);
  }
   update(){
     if(this.body.position.y>400){
        Matter.Body.setPosition(this.body,{x: random(0,400),
        y: random(-10,0)
        });
      }
   }
}
