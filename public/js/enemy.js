define(function(require) {
    var Entity = require('entity'),
        resourceManager = require('resource_manager');
    
    var Enemy = function(name, position) {
        Entity.call(this, name, position);
        this.alive = true;
        this.texture = resourceManager.getImage("enemy");
        this.stunTime = 5000;
        this.stunStart = 0;
    };
    Enemy.prototype = new Entity(null, {});
    
    Enemy.prototype.render = function (ctx) {
        Entity.prototype.render.call(this, ctx);
        ctx.drawImage(this.texture, this.position.x, this.position.y);
    };
    
    Enemy.prototype.isAlive = function() {
        return this.alive;
    };
    Enemy.prototype.isStunned = function() {
        if (+new Date() - this.stunStart > this.stunTime) {
            this.stunStart = 0;
            return false;
        } else {
            return true;
        }
    };
    
    Enemy.prototype.kill = function() {
        this.alive = false;
    };
    Enemy.prototype.stun = function() {
        this.stunStart = +new Date();
    };
    
    return Enemy;
});