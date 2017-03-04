var Point = (function(){
    function Point(x, y){
        var _x = 0;
        var _y = 0;

        Object.defineProperties(this, {
            x: {
                get: function(){
                    return _x;
                },
                set: function(x){
                    _x = isNaN(x) ? _x : x;
                }
            },
            y: {
                get: function(){
                    return _y;
                },
                set: function(y){
                    _y = isNaN(y) ? _y : y;
                }
            }
        });
        this.x = x;
        this.y = y;
        //console.log(this.x, this.y);
    }
    var proto = Point.prototype;
    Object.defineProperties(proto, {
        length: {get:function(){
            var square = Math.pow(this.x, 2) + Math.pow(this.y, 2);
            return Math.sqrt(square);
        }},
        angle: {get:function(){
            return Math.atan2(this.y, this.x);
        }}
    });
    //proto.constructor = Point;
    proto.clone = function(){
        var _clone = new this.constructor(this.x, this.y);
        console.log(_clone);
        return _clone;
    };
    proto.set = function(x, y){
        this.x = isNaN(x) ? this.x : x;
        this.y = isNaN(y) ? this.y : y;
    };
    //Point.RAD_TO_DEG = 180 / Math.PI;
    Object.defineProperty(Point, "RAD_TO_DEG", {value: 180 / Math.PI});
    Point.polar = function(radius, angle){
        var x = radius * Math.cos(angle);
        var y = radius * Math.sin(angle);
        return new Point(x, y);
    };
    //proto = null;
    return Point;
})();
