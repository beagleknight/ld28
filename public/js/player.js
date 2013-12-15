define(function (require) {
    var Entity          = require('entity'),
        resourceManager = require('resource_manager');

    var Player = function (position) {
        Entity.call(this, "player", position);
        this.texture = resourceManager.getImage("player");
    };  
    Player.prototype = new Entity(null, {});

    Player.prototype.render = function (ctx) {
        Entity.prototype.render.call(this, ctx);
        ctx.drawImage(this.texture, this.posX, this.posY);
    };
    
    Player.prototype.update = function (dt) {
        Entity.prototype.update.call(this, dt);
    };
    
    Player.prototype.move = function (posX, posY) {
        Entity.prototype.setPosition.call(this, posX, posY);
    };
    
    Player.prototype.attack = function () {    
        // TODO
    };

    return Player;
});
