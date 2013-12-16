define(function(require) {
    var Sprite = require('sprite'),
        utils  = require('utils');

    
    var Enemy = function(name, position) {
        Sprite.call(this, name, position, "enemy");
        this.alive = true;
        this.rotation = utils.deg2rad(-90);
    };
    Enemy.prototype = new Sprite(null, {});
    
    Enemy.prototype.isAlive = function() {
        return this.alive;
    };
    
    Enemy.prototype.kill = function() {
        this.alive = false;
    };
    
    return Enemy;
});