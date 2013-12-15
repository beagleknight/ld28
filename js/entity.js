define(function () {
    var Entity = function (posX, posY) {
        this.posX = posX;
        this.posY = posY;
    };

  
    Entity.prototype.setPosicion = function (posX, posY) {
        this.posX = posX;
        this.posY = posY;
    };  
    Entity.prototype.render = function () {
        console.log("Estoy dibujandoooooooooo.");
    };

    return Entity;
});
