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
var matrix = [
    [1, 2, 3],
    [1, 2, 3]
];
function sumMatrix(matrix) {
    var sum = 0;
    var j = 100;
    for (var i = 0; i < matrix.length; i++) {
        var currentRow = matrix[i];
        var j_1 = 200;
        for (var i_1 = 0; i_1 < currentRow.length; i_1++) {
            var j_2 = 300;
            sum += currentRow[i_1];
            console.log(i_1, currentRow[i_1], j_2);
        }
        console.log(j_1);
    }
    console.log(j);
    return sum;
}
console.log(sumMatrix(matrix));
/*
for(let i:number = 0;i<5;i++){
        setTimeout(function(): void{
            console.log(i);
        },100*i);
}
console.log("i = " +i);
*/
//const RAD_TO_DEG: number = 180 / Math.PI;
//var obj: Vector = new Vector(1, Math.sqrt(3));
//console.log(obj.length, obj.angle * Point.RAD_TO_DEG);
//console.log(Point.getPolar(Math.SQRT2, Math.PI / 4));
/*
var obj: Vector = Vector.polar(0, 0);
obj.length = 1;
obj.angle = Math.PI / 3;

*/ 
//# sourceMappingURL=typescript_test.js.map