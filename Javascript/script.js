var myLib = {};
(function(){
    function Point(x, y){
        if(typeof x === "number"){
            this.x = x;
            console.log(true);
        }else{
            this.x = 0;
            console.log(false);
        }
        this.y = y || 0;
    }
    var p = Point.prototype;
    p.getDistance = function(){
        var square = Math.pow(this.x, 2) + Math.pow(this.y, 2);
        return Math.sqrt(square);
    };
    p.add = function(x, y){
        this.x += x;
        this.y += y;
        return this;
    };
    p.scale = function(scale){
        this.x *= scale;
        this.y *= scale;
        return this;
    };
    myLib.Point = Point;
})();
