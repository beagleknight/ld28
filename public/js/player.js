define(function (require) {
    var Entity          = require('entity'),
        resourceManager = require('resource_manager'),
        inputManager    = require('input_manager');

    var Player = function (position) {
        Entity.call(this, "player", position);
        this.texture = resourceManager.getImage("player");
        this.moviendo = false;
        this.velocityMod = 100;
        this.velocity = {'x': 0, 'y': 0};
    };  
    Player.prototype = new Entity(null, {});

    Player.prototype.render = function (ctx) {
        Entity.prototype.render.call(this, ctx);
        ctx.drawImage(this.texture, this.position.x, this.position.y);
    };
    
    Player.prototype.update = function (dt) {
        Entity.prototype.update.call(this, dt);

        var clickPosition = inputManager.getClickPosition();

        if (inputManager.isMouseClicked()) {
            this.moviendo = true;
        }
        if (this.position.x <= clickPosition.x + this.velocity.x && this.position.x >= clickPosition.x - this.velocity.x && this.position.y <= clickPosition.y + this.velocity.y && this.position.y >= clickPosition.y - this.velocity.y) {
            this.moviendo = false;
        }
        
        if (this.moviendo) {
            var diffX = clickPosition.x - this.position.x;
            var diffY = clickPosition.y - this.position.y;
            var modDiff = Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2));
            this.velocity.x = (diffX / modDiff) * this.velocityMod;
            this.velocity.y = (diffY / modDiff) * this.velocityMod;
        }
    };
    
    return Player;
});
