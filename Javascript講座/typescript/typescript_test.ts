class Point{
    static RAD_TO_DEG: number = 180 / Math.PI;
    constructor(public x: number, public y: number){
    }
    getLength(): number{
        var square :number = this.x * this.x + this.y * this.y;
        return Math.sqrt(square);
    }
    getAngle(): number{
        return Math.atan2(this.y, this.x);
    }
    static polar(length: number, angle: number): Point{
        var x: number = length * Math.cos(angle);
        var y: number = length * Math.sin(angle);
        return new Point(x, y);
    }
}
class Vector extends Point{
    constructor(x: number, y: number){
        super(x, y);
    }
    scale(scale: number): void{
        this.x *= scale;
        this.y *= scale;
    }
    add(point: Point): void{
        this.x += point.x;
        this.y += point.y;
    }
    static polar(length: number, angle: number): Vector{
        var point: Point = Point.polar(length, angle)
        return new Vector(point.x, point.y);
    }
}
var obj: Vector = Vector.polar(1, 1);
obj.scale(2);
console.log(obj.x,obj.y);
console.log(obj.getLength(), obj.getAngle() * Point.RAD_TO_DEG);
