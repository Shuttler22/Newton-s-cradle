class Constraint1 {
    constructor(bodyA, bodyB){
        var options={
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness:0.04
            , length:10

        }
       this.constraint = Constraint.create(options);
       World.add(world, this.constraint);

       
    }
    display(){
        var a = this.constraint.bodyA.position
        var b = this.constraint.bodyB.position
        strokeWeight(3);
        line(a.x, a.y, b.x, b.y)
    }
}