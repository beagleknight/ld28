define(function() {
    
    var Vector = function(position) {
        this.position = {x: position.x || 0, y: position.y || 0};
    };
    
    Vector.prototype.module = function() {
        return Math.sqrt(Math.pow(this.position.x, 2)+Math.pow(this.position.y, 2));
    };
    
    Vector.prototype.direction = function() {
        return new Vector(this.position.x/this.module(), this.position.y/this.module());
    };
    
    Vector.prototype.add = function(vector) {
        return new Vector(this.position.x + vector.position.x, this.position.y + vector.position.y);
    };
    
    Vector.prototype.scalar = function(k) {
        return new Vector(k*this.position.x, k*this.position.y);
    };
    
    return Vector;
});