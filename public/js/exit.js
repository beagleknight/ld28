define(function (require) {
    var Entity = require('entity'),
        resourceManager = require('resource_manager');

    var Exit = function (name, position, type) {
        Entity.call(this, name, position);
        
        this.texture = resourceManager.getImage(type);
        switch(type) {
            case "window":
                this.health = 100;
                break;
            case "door":
                this.health = 200;
                break;    
        }
        this.opened = false;
    };  
    Exit.prototype = new Entity(null, {});
    
    Exit.prototype.render = function (ctx) {
        Entity.prototype.render.call(this, ctx);
        ctx.drawImage(this.texture, this.position.x, this.position.y);
    };
  
    Exit.prototype.doDamage = function (damage) {
        this.health -= damage;
        
        if (this.health <= 0) {
            this.opened = true;
        }
    };
    
    Exit.prototype.isOpen = function () {
        return this.opened;
    };

    return Exit;
});
