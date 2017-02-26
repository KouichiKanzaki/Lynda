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
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.getLength = function () {
        var square = this.x * this.x + this.y * this.y;
        return Math.sqrt(square);
    };
    Point.prototype.getAngle = function () {
        return Math.atan2(this.y, this.x);
    };
    Point.polar = function (length, angle) {
        var x = length * Math.cos(angle);
        var y = length * Math.sin(angle);
        return new Point(x, y);
    };
    return Point;
}());
Point.RAD_TO_DEG = 180 / Math.PI;
var Vector = (function (_super) {
    __extends(Vector, _super);
    function Vector(x, y) {
        return _super.call(this, x, y) || this;
    }
    Vector.prototype.scale = function (scale) {
        this.x *= scale;
        this.y *= scale;
    };
    Vector.prototype.add = function (point) {
        this.x += point.x;
        this.y += point.y;
    };
    Vector.polar = function (length, angle) {
        var point = Point.polar(length, angle);
        return new Vector(point.x, point.y);
    };
    return Vector;
}(Point));
var obj = Vector.polar(1, 1);
obj.scale(2);
console.log(obj.x, obj.y);
console.log(obj.getLength(), obj.getAngle() * Point.RAD_TO_DEG);
//# sourceMappingURL=typescript_test.js.map