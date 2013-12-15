define(function(require) {
    var Entity = require('entity'),
        resourceManager = require('resource_manager');
    
    var Enemy = function(name, position) {
        Entity.call(this, name, position);
        this.alive = true;
        this.texture = resourceManager.getImage("enemy");
    };
    Enemy.prototype = new Entity(null, {});
    
    Enemy.prototype.render = function (ctx) {
        Entity.prototype.render.call(this, ctx);
        ctx.drawImage(this.texture, this.position.x, this.position.y);
    };
    
    Enemy.prototype.isAlive = function() {
        return this.alive;
    };
    
    Enemy.prototype.kill = function() {
        this.alive = false;
    };
    
    return Enemy;
});