define(function() {
    var Vector = function(position) {
        this.position = {'x': position.x || 0, 'y': position.y || 0};
        this.direction = this.calculateDirection();
        this.velocity = 0;
    };
    
    Vector.prototype.setPosition = function(position) {
        this.position.x = position.x || 0;
        this.position.y = position.y || 0;
        this.direction = this.calculateDirection();
    };
    Vector.prototype.setVelocity = function(velocity) {
        this.velocity = velocity;
    };
    Vector.prototype.getVelocityX = function() {
        return this.direction.x * this.velocity;
    };
    Vector.prototype.getVelocityY = function() {
        return this.direction.y * this.velocity;
    };
    
    Vector.prototype.module = function() {
        return Math.sqrt(Math.pow(this.position.x, 2) + Math.pow(this.position.y, 2));
    };    
    Vector.prototype.add = function(position) {
        this.position.x += position.x;
        this.position.y += position.y;        
        this.direction = this.calculateDirection();
    };    
    Vector.prototype.scalar = function(k) {
        this.position.x *= k;
        this.position.y *= k;
    };
    
    Vector.prototype.calculateDirection = function() {
        var modulo = this.module();
        if (modulo !== 0) {
            return {'x': this.position.x * 1.0 / modulo, 'y': this.position.y * 1.0 / modulo};
        } else {
            return {'x': 0, 'y': 0};
        }
    };
    
    return Vector;
});