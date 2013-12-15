define(function (require) {
    var Entity = require('entity');

    var Player = function (name, posX, posY) {
        Entity.call(this, posX, posY);
        
        this.name = name;
    };  
    Player.prototype = new Entity();
  

    Player.prototype.render = function (ctx) {
        Entity.prototype.render.call(this, ctx);
        
        // TODO
    };
    Player.prototype.update = function () {
        // TODO
    };
    
    Player.prototype.move = function (posX, posY) {
        Entity.prototype.setPosition.call(this, posX, posY);
    };
    Player.prototype.attack = function () {
console.log("My name is " + this.name + ", you killed my father, prepare to die!");

        // TODO
    };

    return Player;
});
