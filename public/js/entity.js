define(function () {
    var Entity = function (name, position) {
        this.name = name;
        this.posX = position.x || 0;
        this.posY = position.y || 0;
    };

    Entity.prototype.render = function (ctx) {
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
    
    Entity.prototype.setPosition = function (position) {
        this.posX = position.x;
        this.posY = position.y;
    };

    return Entity;
});
