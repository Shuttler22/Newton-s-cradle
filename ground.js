class Ground{
    constructor(x, y, w, h){
        var options={
            friction: 1
            ,density:1.2,
             restitution:0.9,
             isStatic:true

        }
        this.body = Bodies.rectangle(x, y, w, h, options)
        World.add(world, this.body);
    }
display(){
    
    push()
    
    translate(this.body.position.x, this.body.position.y)
    fill("grey")
    rect(100, 100, 280, 20)
    pop();
}

}