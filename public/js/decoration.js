define(function(require) {
    var Sprite = require('sprite'),
        utils = require('utils');
    
    var Decoration = function(name, position) {
        Sprite.call(this, name, position, "chair");
        this.broken = false;
        this.rotation = utils.deg2rad(-90);
        this.group = "decoration";
    };
    Decoration.prototype = new Sprite(null, {});
    
    Decoration.prototype.isBroken = function () {
        return this.broken;
    };
    
    return Decoration;
});