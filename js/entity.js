define(function () {
    var Entity = function (posX, posY) {
        this.posX = posX;
        this.posY = posY;
    };

  
    Entity.prototype.setPosicion = function (posX, posY) {
        this.posX = posX;
        this.posY = posY;
    };  
    Entity.prototype.render = function (ctx) {
        var posX = this.posX || 0, posY = this.posY || 0;
        
console.log('Estoy dibujandoooooooooo.');
        ctx.beginPath();

        ctx.moveTo(posX - 5, posY);
        ctx.lineTo(posX + 5, posY);
        ctx.moveTo(posX, posY - 5);
        ctx.lineTo(posX, posY + 5);
        
        ctx.strokeStyle = 'blue';
        ctx.stroke();
    };
    

    return Entity;
});
