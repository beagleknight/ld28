define(function() {
    var Vector = function(vector) {
        this.vector = {x: vector.x || 0, y: vector.y || 0};
    };
    
    Vector.prototype.setVector = function(vector) {
        this.vector.x = vector.x || 0;
        this.vector.y = vector.y || 0;
    };
    
    Vector.prototype.module = function() {
        return Math.sqrt(Math.pow(this.vector.x, 2)+Math.pow(this.vector.y, 2));
    };
    
    Vector.prototype.direction = function() {
        var modulo = this.module();
        return {'x': this.vector.x / modulo, 'y': this.vector.y / modulo};
    };
    
    Vector.prototype.add = function(vector) {
        this.vector.x += vector.x;
        this.vector.y += vector.y;
        
        return this.vector;
    };
    
    Vector.prototype.scalar = function(k) {
        this.vector.x *= k;
        this.vector.y *= k;
        
        return this.vector;
    };
    
    return Vector;
});