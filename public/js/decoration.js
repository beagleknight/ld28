define(function(require) {
    var Sprite = require('sprite');
    
    var Decoration = function(name, position) {
        Sprite.call(this, name, position);
        this.broken = false;
    };
    Decoration.prototype = new Sprite(null, {});
    
    Decoration.prototype.isBroken = function () {
        return this.broken;
    };
    
    return Decoration;
});