    //console.log(proto);
    var Vector = (function(){
    function Vector(x, y){
        Point.call(this, x, y);
    }
    //Vector.prototype = new Point();
    Vector.prototype = Object.create(Point.prototype);
    var proto = Vector.prototype;
    proto.constructor = Vector;
    proto.add = function(x, y){
        this.x += x;
        this.y += y;
    }
    proto.scale = function(scale){
        this.x *= scale;
        this.y *= scale;
    }

    proto.getDistance = function(_vector){
        var _clone = this.clone();
        _clone.add(-_vector.x, -_vector.y);
        return _clone.length;
    };
        return Vector;
    })();
    //proto = null;
    //console.log(proto);
