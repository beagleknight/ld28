define(function(require) {
    var Entity = require('entity');
    
    var Decoration = function(name, position) {
        Entity.call(this, name, position);
        this.broken = false;
    };
    Decoration.prototype = new Entity(null, {});
    
    Decoration.prototype.isBroken = function () {
        return this.broken;
    };
    
    return Decoration;
});