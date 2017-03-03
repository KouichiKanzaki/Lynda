class Point implements IPoint{
    //static RAD_TO_DEG: number = 180 / Math.PI;
    constructor(public x: number = 0, public y: number = 0){
    }
    set length(length: number){
        var point: IPoint = Point.getPolar(length, this.angle);
        this.x = point.x;
        this.y = point.y;
    }
    get length(): number{
        var square :number = this.x * this.x + this.y * this.y;
        return Math.sqrt(square);
    }
    set angle(angle: number){
        var point: IPoint = Point.getPolar(this.length, angle);
        this.x = point.x;
        this.y = point.y;
    };
    get angle(): number{
        return Math.atan2(this.y, this.x);
    }
    static polar(length: number, angle: number): Point{
        var point: IPoint = Point.getPolar(length, angle);
        return new Point(point.x, point.y);
    }
    protected static getPolar(length: number, angle: number): IPoint{
        var x: number = length * Math.cos(angle);
        var y: number = length * Math.sin(angle);
        return {x: x, y: y}
    }
    static get RAD_TO_DEG(): number {
        return 180 / Math.PI; 
    }
}
class Vector extends Point{
    constructor(x: number = 0, y: number = 0){
        super(x, y);
    }
    scale(scaleX: number, scaleY?: number): void{
        this.x *= scaleX;
        this.y *= isNaN(scaleY) ? scaleX : scaleY;;
    }
    add(point: IPoint): void{
        this.x += point.x;
        this.y += point.y;
    }
    static polar(length: number, angle: number): Vector{
        var point: IPoint = Point.getPolar(length, angle);
        return new Vector(point.x, point.y);
    }
}
class Point3D {
    constructor(public x: number = 0, public y: number = 0, public z: number = 0){
    }
}
interface IPoint{
    x: number;
    y: number;
}
let x: number = 3;
let y: number = 4;
let point = {
    x: 1,
    y: Math.sqrt(3),
    start: function(): void{
        setTimeout((): void => {
            console.log(Math.sqrt(this.x * this.x + this.y * this.y));
        },100);
    }
}
point.start();


/*
let value = new Point();
value = new Vector();
value = {x:0,y:1};
value = new Point3D(0,0,0);
*/
/*
let getInfo: (x: number, y: number) => number;
getInfo = (x: number, y: number):number => Math.sqrt(x*x+y*y);
console.log(getInfo(1,1));
*/
/*
let matrix: any[][] = [
    [1,2,3],
    [1,2,3]
];
function sumMatrix(matrix: number[][]): number{
    let sum:number = 0;
    const j: number = 100;
    for(let i: number = 0;i<matrix.length;i++){
         let currentRow: number[] = matrix[i];
         const j: number = 200;
        for(let i: number = 0;i<currentRow.length;i++){
            const j: number = 300;
            sum += currentRow[i];
            console.log(i, currentRow[i], j);
        }
        console.log(j);
    }
    console.log(j);
    return sum;
}
console.log(sumMatrix(matrix));
*/
/*
for(let i:number = 0;i<5;i++){
        setTimeout(function(): void{
            console.log(i);
        },100*i);
}
console.log("i = " +i);
*/
//const RAD_TO_DEG: number = 180 / Math.PI;
//var obj: Point = new Point3D(1, 2, 3);
//console.log(obj.length, obj.angle * Point.RAD_TO_DEG);
//console.log(Point.getPolar(Math.SQRT2, Math.PI / 4));
/*
var obj: Vector = Vector.polar(0, 0);
obj.length = 1;
obj.angle = Math.PI / 3;

*/