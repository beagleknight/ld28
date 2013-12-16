define(function (require) {
    var Sprite          = require('sprite'),
        inputManager    = require('input_manager'),
        utils           = require('utils');

    var Player = function (position) {
        Sprite.call(this, "player", position, "player");
        this.moviendo = false;
        this.velocityMod = 100;
        this.rotation = utils.deg2rad(90);
        this.destination = null;
    };  
    Player.prototype = new Sprite(null, {});
    
    Player.prototype.update = function (dt) {
        Sprite.prototype.update.call(this, dt);
        
        if (inputManager.isMouseClicked()) {
            this.destination = inputManager.getClickPosition();

            this.velocity.copy(this.destination);
            this.velocity.sub(this.position);
            this.velocity.normalize();
            this.rotation = Math.atan2(this.velocity.y, this.velocity.x);
            this.velocity.scalar(this.velocityMod);
            
            this.moviendo = true;
        }
        
        if (this.moviendo) {
            var dist = this.position.dist(this.destination);
            if (dist < 5) {
                this.moviendo = false;
                this.position.copy(this.destination);
            }
        } else {
            this.velocity.scalar(0);
        }
    };
    
    return Player;
});
