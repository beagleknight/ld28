define(function (require) {
    var Entity = require('entity');

    var Player = function (name, posX, posY) {
        Entity.call(this, posX, posY);
        
        this.name = name;
    };  
    Player.prototype = new Entity();
  

    Player.prototype.attack = function () {
        console.log("My name is " + this.name + ", you killed my father, prepare to die!");
    };

    return Player;
});
