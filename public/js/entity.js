define(function () {
    var Entity = function (name, position) {
        this.name = name;
        this.position = {'x': position.x || 0, 'y': position.y || 0};
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
        this.position.x = position.x;
        this.position.y = position.y;
    };

    return Entity;
});
