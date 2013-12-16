define(function (require) {
    var Entity          = require('entity'),
        resourceManager = require('resource_manager'),
        inputManager    = require('input_manager');

    var Player = function (position) {
        Entity.call(this, "player", position);
        this.texture = resourceManager.getImage("player");
        this.moviendo = false;
        this.velocityMod = 100;
        this.movePosition;
    };  
    Player.prototype = new Entity(null, {});

    Player.prototype.render = function (ctx) {
        Entity.prototype.render.call(this, ctx);
        ctx.drawImage(this.texture, this.position.x, this.position.y);
    };
    
    Player.prototype.update = function (dt) {
        Entity.prototype.update.call(this, dt);

        if (inputManager.isMouseClicked() || this.moviendo) {
            this.moviendo = true;
            this.movePosition = inputManager.getClickPosition();
            if (((this.velocity.direction.x > 0 && this.velocity.direction.y > 0) && (this.position.x >= this.movePosition.x && this.position.y >= this.movePosition.y)) ||
                    ((this.velocity.direction.x > 0 && this.velocity.direction.y < 0) && (this.position.x >= this.movePosition.x && this.position.y <= this.movePosition.y)) ||
                    ((this.velocity.direction.x < 0 && this.velocity.direction.y > 0) && (this.position.x <= this.movePosition.x && this.position.y >= this.movePosition.y)) ||
                    ((this.velocity.direction.x < 0 && this.velocity.direction.y < 0) && (this.position.x <= this.movePosition.x && this.position.y <= this.movePosition.y))) {
                this.moviendo = false;
            }
        }
        
        if (this.moviendo) {
            this.velocity.setPosition({'x': this.movePosition.x - this.position.x, 'y': this.movePosition.y - this.position.y});
            this.velocity.setVelocity(this.velocityMod);
        } else {
            this.velocity.setPosition({'x': 0, 'y': 0});
            this.velocity.setVelocity(0);
        }
    };
    
    return Player;
});
