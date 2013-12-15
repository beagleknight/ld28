define(function(require) {
    var Entity = require('entity');
    
    var Enemy = function(x, y, name) {
        Entity.call(this, x, y);
        this.name = name;
    };
    
    Enemy.prototype = new Entity();
    
    Enemy.prototype.alive = true;
    
    Enemy.prototype.isAlive = function() {
        return this.alive;
    };
    
    Enemy.prototype.kill = function() {
        this.alive = false;
    };
    
});