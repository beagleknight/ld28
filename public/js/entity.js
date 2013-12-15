define(function () {
    var Entity = function (name, position) {
        this.name = name;
        this.position = {'x': position.x || 0, 'y': position.y || 0};
        this.velocity = { x: 0, y: 0 };
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
    
    Entity.prototype.update = function (delta) {
        this.position.x = this.position.x + this.velocity.x * delta;
        this.position.y = this.position.y + this.velocity.y * delta;
    };
    
    Entity.prototype.setPosition = function (position) {
        this.position.x = position.x;
        this.position.y = position.y;
    };

    return Entity;
});
