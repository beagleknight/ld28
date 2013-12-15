define(function (require) {
    var Entity = require('entity');

    var Player = function (position) {
        Entity.call(this, "player", position);
    };  
    Player.prototype = new Entity(null, {});

    Player.prototype.render = function (ctx) {
        Entity.prototype.render.call(this, ctx);
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
