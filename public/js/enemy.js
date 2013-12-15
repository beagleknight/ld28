define(function(require) {
    var Entity = require('entity');
    
    var Enemy = function(name, position) {
        Entity.call(this, name, position);
        this.alive = true;
    };
    Enemy.prototype = new Entity(null, {});
    
    Enemy.prototype.isAlive = function() {
        return this.alive;
    };
    
    Enemy.prototype.kill = function() {
        this.alive = false;
    };
});