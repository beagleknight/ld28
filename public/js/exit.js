define(function (require) {
    var Entity = require('entity');

    var Exit = function (name, position, health) {
        Entity.call(this, name, position);
        
        this.health = health || 100;
        this.opened = false;
    };  
    Exit.prototype = new Entity(null, {});
  
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
