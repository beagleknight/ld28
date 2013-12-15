define(function (require) {
    var Entity          = require('entity'),
        resourceManager = require('resource_manager'),
        inputManager    = require('input_manager');

    var Player = function (position) {
        Entity.call(this, "player", position);
        this.texture = resourceManager.getImage("player");
        this.moviendo = false;
    };  
    Player.prototype = new Entity(null, {});

    Player.prototype.render = function (ctx) {
        Entity.prototype.render.call(this, ctx);
        ctx.drawImage(this.texture, this.position.x, this.position.y);
    };
    
    Player.prototype.update = function (dt) {
        Entity.prototype.update.call(this, dt);

        var newPosition = {};
        var clickPosition = inputManager.getClickPosition();

        if (inputManager.isMouseClicked()) {
            //console.log("me voy a mover");        
            this.moviendo = true;
        }
        if (this.position.x <= clickPosition.x + this.velocity.x && this.position.x >= clickPosition.x - this.velocity.x && this.position.y <= clickPosition.y + this.velocity.y && this.position.y >= clickPosition.y - this.velocity.y) {
            //console.log("me voy a parar");
            this.moviendo = false;
        }
        
        this.velocity = { x: 0, y: 0 };
        
        if (this.moviendo) {
            //console.log("me estoy moviendo");
            var right = clickPosition.x > this.position.x;
            var left = clickPosition.x < this.position.x;
            var up = clickPosition.y < this.position.y;
            var down = clickPosition.y > this.position.y;        
                    
            if (right)  { this.velocity.x = 20; }
            if (left)   { this.velocity.x = -20; }
            if (up)     { this.velocity.y = -20; }
            if (down)   { this.velocity.y = 20; }
        }
    };
    
    return Player;
});
