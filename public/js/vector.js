define(function() {
    var Vector = function(x, y) {
        this.x = x || 0;
        this.y = y || 0;
    };
    
    Vector.prototype.module = function() {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    };    
    
    Vector.prototype.normalize = function() {
        var module = this.module();
        this.x /= module;
        this.y /= module;
    };
    
    Vector.prototype.copy = function(vector) {
        this.x = vector.x;
        this.y = vector.y;
    };
    
    Vector.prototype.add = function(vector) {
        this.x += vector.x;
        this.y += vector.y;        
    }; 

    Vector.prototype.sub = function(vector) {
        this.x -= vector.x;
        this.y -= vector.y;        
    };        
    
    Vector.prototype.scalar = function(k) {
        this.x *= k;
        this.y *= k;
    };
    
    Vector.prototype.dist = function(vector) {
        return Math.sqrt(Math.pow(this.x - vector.x, 2) + Math.pow(this.y - vector.y, 2));
    };
        
    return Vector;
});