define(function (require) {
    var Sprite          = require('sprite'),
        inputManager    = require('input_manager'),
        utils           = require('utils');

    var Player = function (position) {
        Sprite.call(this, "player", position, "player");
        this.moviendo = false;
        this.velocityMod = 100;
        this.rotation = utils.deg2rad(90);
    };  
    Player.prototype = new Sprite(null, {});
    
    Player.prototype.update = function (dt) {
        Sprite.prototype.update.call(this, dt);

        var clickPosition = inputManager.getClickPosition();

        if (inputManager.isMouseClicked()) {
            this.moviendo = true;
        }
        if (this.position.x === clickPosition.x && this.position.y === clickPosition.y) {
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
