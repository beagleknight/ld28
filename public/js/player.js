define(function (require) {
    var Entity          = require('entity'),
        resourceManager = require('resource_manager'),
        inputManager    = require('input_manager'),
        utils           = require('utils');

    var Player = function (position) {
        Entity.call(this, "player", position);
        this.texture = resourceManager.getImage("player");
        this.size = { w: this.texture.width, h: this.texture.height };
        this.moviendo = false;
        this.velocityMod = 100;
        this.velocity = {'x': 0, 'y': 0};
        this.rotation = utils.deg2rad(90);
    };  
    Player.prototype = new Entity(null, {});

    Player.prototype.render = function (ctx) {
        Entity.prototype.render.call(this, ctx);
        
        ctx.save();
        ctx.translate(this.position.x, this.position.y);
        ctx.translate(this.size.w / 2, this.size.h / 2);
        ctx.rotate(this.rotation);
        ctx.translate(-this.size.w / 2, -this.size.h / 2);
        ctx.drawImage(this.texture, 0, 0);
        ctx.restore();
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
            this.velocity.x = (diffX / modDiff);
            this.velocity.y = (diffY / modDiff);
            this.rotation = Math.atan2(this.velocity.y, this.velocity.x);
            this.velocity.x *= this.velocityMod;
            this.velocity.y *= this.velocityMod;
        }
    };
    
    return Player;
});
