define(function (require) {
    var Entity          = require('entity'),
        resourceManager = require('resource_manager'),
        inputManager    = require('input_manager');

    var Player = function (position) {
        Entity.call(this, "player", position);
        this.texture = resourceManager.getImage("player");
        this.moviendo = false;
        this.velocityMod = 100;
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
        if (this.position.x === clickPosition.x && this.position.y === clickPosition.y) {
            this.moviendo = false;
        }
        
        if (this.moviendo) {
            this.velocity.setPosition({'x': clickPosition.x - this.position.x, 'y': clickPosition.y - this.position.y});
            this.velocity.setVelocity(this.velocityMod);
        }
    };
    
    return Player;
});
