class Ball {
    constructor(x,y, radius){
        var options={
            restitution:0.3,
            friction:0,
            density:1.2,
            isStatic :true
        }
        this.body = Bodies.circle(x, y, radius, options);
       
        this.radius = radius;
        World.add(world, this.body)
    }
    display(){
        var ballPos =this.body.position;		

		push()
		translate(ballPos.x, ballPos.y)
        fill("pink")
        ellipse(0, 0, this.radius)

		pop()
    }
}