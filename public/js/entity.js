define(function () {
    var Vector = require('vector');
    
    var Entity = function (name, position) {
        this.name = name;
        this.position = new Vector(position.x, position.y);
        this.velocity = new Vector(0, 0);
        this.rotation = 0;
    };

    Entity.prototype.render = function () {
        // ctx.beginPath();

        // ctx.moveTo(this.position.x - 5, this.position.y);
        // ctx.lineTo(this.position.x + 5, this.position.y);
        // ctx.moveTo(this.position.x, this.position.y - 5);
        // ctx.lineTo(this.position.x, this.position.y + 5);
        
        // ctx.strokeStyle = 'blue';
        // ctx.stroke();
    };
    
    Entity.prototype.update = function (delta) {
        this.position.x = this.position.x + this.velocity.x * delta;
        this.position.y = this.position.y + this.velocity.y * delta;
    };
    
    return Entity;
});
