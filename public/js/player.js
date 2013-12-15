define(function (require) {
    var Entity          = require('entity'),
        resourceManager = require('resource_manager'),
        inputManager    = require('input_manager');

    var Player = function (position) {
        Entity.call(this, "player", position);
        this.texture = resourceManager.getImage("player");
        this.velocidad = {'x': 2, 'y': 2};
        this.moviendo = false;
    };  
    Player.prototype = new Entity(null, {});

    Player.prototype.render = function (ctx) {
        Entity.prototype.render.call(this, ctx);
        ctx.drawImage(this.texture, this.position.x, this.position.y);
    };
    
    Player.prototype.update = function (dt) {
        Entity.prototype.update.call(this, dt);

        var newPosition = {};
        var clickPosition = inputManager.getClickPosition();

        if (inputManager.isMouseClicked()) {
console.log("me voy a mover");        
            this.moviendo = true;
        }
        if (this.position.x <= clickPosition.x + this.velocidad.x && this.position.x >= clickPosition.x - this.velocidad.x && this.position.y <= clickPosition.y + this.velocidad.y && this.position.y >= clickPosition.y - this.velocidad.y) {
console.log("me voy a parar");
            this.moviendo = false;
        }
        
        if (this.moviendo) {
console.log("me estoy moviendo");
            var right = clickPosition.x > this.position.x;
            var left = clickPosition.x < this.position.x;
            var up = clickPosition.y > this.position.y;
            var down = clickPosition.y < this.position.y;        
            if (right) {newPosition.x = this.position.x + this.velocidad.x;}
            if (left) {newPosition.x = this.position.x - this.velocidad.x;}
            if (up) {newPosition.y = this.position.y + this.velocidad.y;}
            if (down) {newPosition.y = this.position.y - this.velocidad.y;}
            
            this.move(newPosition);
        }
    };
    
    Player.prototype.move = function (position) {
        Entity.prototype.setPosition.call(this, position);
    };
    
    Player.prototype.attack = function () {    
        // TODO
    };

    return Player;
});
