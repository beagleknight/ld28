define(function () {
    var Entity = function (posX, posY) {
        this.posX = posX || 0;
        this.posY = posY || 0;
    };

  
    Entity.prototype.setPosicion = function (posX, posY) {
        this.posX = posX;
        this.posY = posY;
    };  
    Entity.prototype.render = function (ctx) {
console.log('Estoy dibujandoooooooooo.');
        ctx.beginPath();

        ctx.moveTo(this.posX - 5, this.posY);
        ctx.lineTo(this.posX + 5, this.posY);
        ctx.moveTo(this.posX, this.posY - 5);
        ctx.lineTo(this.posX, this.posY + 5);
        
        ctx.strokeStyle = 'blue';
        ctx.stroke();
    };
    

    return Entity;
});
