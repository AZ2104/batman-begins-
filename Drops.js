class Drops {
    constructor(x,y){
        var options = {
            density: 1.2,
            frictionAir: 0.005
        }
        this.body = Bodies.circle(x,y,5,options);
        this.radius = 5;

        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push()
        translate(pos.x, pos.y)
        rotate(angle)
        ellipseMode(CENTER);
        fill("blue");
        ellipse(0,0,this.radius);
        pop()
    }
}