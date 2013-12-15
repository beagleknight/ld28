define(function () {
    var Entity = function (posicion) {
        this.posX = posicion.x || 0;
        this.posY = posicion.y || 0;
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
    Entity.prototype.update = function () {
        // TODO
    };
    
    Entity.prototype.setPosicion = function (posicion) {
        this.posX = posicion.x;
        this.posY = posicion.y;
    };
    

    return Entity;
});
