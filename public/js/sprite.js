define(function (require) {
    var Entity          = require('entity'),
        resourceManager = require('resource_manager'),
        Sprite;
        
    Sprite = function (name, position, textureId) {
        Entity.call(this, name, position);
        this.texture = resourceManager.getImage(textureId);
        if (this.texture) {
            this.size = { w: this.texture.width, h: this.texture.height };
        }
    };
    Sprite.prototype = new Entity(null, {});
    
    Sprite.prototype.render = function (ctx) {
        Entity.prototype.render.call(this, ctx);
        
        if (this.texture) {
            ctx.save();
            ctx.translate(this.position.x, this.position.y);
            ctx.translate(this.size.w / 2, this.size.h / 2);
            ctx.rotate(this.rotation);
            ctx.translate(-this.size.w / 2, -this.size.h / 2);
            ctx.drawImage(this.texture, 0, 0);
            ctx.restore();
        }
    };
    
    Sprite.prototype.update = function (dt) {
        Entity.prototype.update.call(this, dt);
    };

    return Sprite;
});