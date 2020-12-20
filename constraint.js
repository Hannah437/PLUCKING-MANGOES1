class Constraint{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            pointB: bodyB,
            stiffness: 0.04,
            length: 10
        }
        this.constr = Constraint.create(options);
        World.add(world, this.const);
    }

    display(){
        if (this.constr.bodyA){
        var pointA = this.constr.bodyA.position;
        var pointB = this.constr.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}
