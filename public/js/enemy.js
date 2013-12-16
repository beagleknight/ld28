define(function(require) {
    var Sprite = require('sprite'),
        utils  = require('utils');

    
    var Enemy = function(name, position) {
        Sprite.call(this, name, position, "enemy");
        this.alive = true;
        this.rotation = utils.deg2rad(-90);
        this.stunTime = 5000;
        this.stunStart = 0;
    };
    Enemy.prototype = new Sprite(null, {});
    
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