define(function (require) {
    var Entity = require('entity');

    var Exit = function (salud, posX, posY) {
        Entity.call(this, posX, posY);
        
        this.salud = salud || 100;
        this.abierta = false;
    };  
    Exit.prototype = new Entity();
  

    Exit.prototype.romper = function (damage) {
        this.salud -= damage;
        
        if (this.salud <= 0) {
            this.abierta = true;
        }
    };
    Exit.prototype.isAbierta = function () {
        return this.abierta;
    };
    

    return Exit;
});
