var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Point = (function () {
    //static RAD_TO_DEG: number = 180 / Math.PI;
    function Point(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.x = x;
        this.y = y;
    }
    Object.defineProperty(Point.prototype, "length", {
        get: function () {
            var square = this.x * this.x + this.y * this.y;
            return Math.sqrt(square);
        },
        set: function (length) {
            var point = Point.getPolar(length, this.angle);
            this.x = point.x;
            this.y = point.y;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Point.prototype, "angle", {
        get: function () {
            return Math.atan2(this.y, this.x);
        },
        set: function (angle) {
            var point = Point.getPolar(this.length, angle);
            this.x = point.x;
            this.y = point.y;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Point.polar = function (length, angle) {
        var point = Point.getPolar(length, angle);
        return new Point(point.x, point.y);
    };
    Point.getPolar = function (length, angle) {
        var x = length * Math.cos(angle);
        var y = length * Math.sin(angle);
        return { x: x, y: y };
    };
    Object.defineProperty(Point, "RAD_TO_DEG", {
        get: function () {
            return 180 / Math.PI;
        },
        enumerable: true,
        configurable: true
    });
    return Point;
}());
var Vector = (function (_super) {
    __extends(Vector, _super);
    function Vector(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        return _super.call(this, x, y) || this;
    }
    Vector.prototype.scale = function (scaleX, scaleY) {
        this.x *= scaleX;
        this.y *= isNaN(scaleY) ? scaleX : scaleY;
        ;
    };
    Vector.prototype.add = function (point) {
        this.x += point.x;
        this.y += point.y;
    };
    Vector.polar = function (length, angle) {
        var point = Point.getPolar(length, angle);
        return new Vector(point.x, point.y);
    };
    return Vector;
}(Point));
var Point3D = (function () {
    function Point3D(x, y, z) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (z === void 0) { z = 0; }
        this.x = x;
        this.y = y;
        this.z = z;
    }
    return Point3D;
}());
var x = 3;
var y = 4;
var point = {
    x: 1,
    y: Math.sqrt(3),
    start: function () {
        var _this = this;
        setTimeout(function () {
            console.log(Math.sqrt(_this.x * _this.x + _this.y * _this.y));
        }, 100);
    }
};
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
//# sourceMappingURL=typescript_test.js.map