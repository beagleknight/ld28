define(function (require) {
    var Sprite          = require('sprite'),
        inputManager    = require('input_manager'),
        utils           = require('utils');

    var Player = function (position) {
        Sprite.call(this, "player", position, "player");
        this.moviendo = false;
        this.velocityMod = 100;
        this.rotation = utils.deg2rad(90);
        this.movePosition;
    };  
    Player.prototype = new Sprite(null, {});
    
    Player.prototype.update = function (dt) {
        Sprite.prototype.update.call(this, dt);
    
        var clickPosition = inputManager.getClickPosition();
        
        if (inputManager.isMouseClicked() || this.moviendo) {
            this.moviendo = true;
            this.movePosition = inputManager.getClickPosition();
            if (((this.velocity.x > 0 && this.velocity.y > 0) && (this.position.x >= this.movePosition.x && this.position.y >= this.movePosition.y)) ||
                    ((this.velocity.x > 0 && this.velocity.y < 0) && (this.position.x >= this.movePosition.x && this.position.y <= this.movePosition.y)) ||
                    ((this.velocity.x < 0 && this.velocity.y > 0) && (this.position.x <= this.movePosition.x && this.position.y >= this.movePosition.y)) ||
                    ((this.velocity.x < 0 && this.velocity.y < 0) && (this.position.x <= this.movePosition.x && this.position.y <= this.movePosition.y))) {
                this.moviendo = false;
            }
        }
        
        if (this.moviendo) {
            this.velocity.copy(clickPosition);
            this.velocity.sub(this.position);
            this.velocity.normalize();
            this.rotation = Math.atan2(this.velocity.y, this.velocity.x);
            this.velocity.scalar(this.velocityMod);
        } else {
            this.velocity.scalar(0);
        }
    };
    
    return Player;
});
