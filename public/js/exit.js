define(function (require) {
    var Sprite = require('sprite');
    
    var Exit = function (name, position, type) {
        Sprite.call(this, name, position, type);
       
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
    Exit.prototype = new Sprite(null, {});
  
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
