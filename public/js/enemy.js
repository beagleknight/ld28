define(function(require) {
    var Entity = require('entity'),
        resourceManager = require('resource_manager');
    
    var Enemy = function(name, position) {
        Entity.call(this, name, position);
        
        this.alive = true;
        this.texture = resourceManager.getImage("enemy");
        this.moviendo = false;
        this.velocityMod = 100;
        this.stunTime = 5000;
        this.stunStart = 0;
        this.stamina = 10000;
        this.maxStamina = 10000;
        this.exhaustedTime = 3000;
        this.exhaustedStart = 0;
        this.cansancio = 1;
        this.recuperacion = 3;
        this.moving = false;
    };
    Enemy.prototype = new Entity(null, {});
    
    Enemy.prototype.render = function (ctx) {
        Entity.prototype.render.call(this, ctx);
        ctx.drawImage(this.texture, this.position.x, this.position.y);
    };
    Player.prototype.update = function (dt) {
        Entity.prototype.update.call(this, dt);

        if (!this.isStunned() && !this.isExhausted() && this.moving) {
            this.cansar();
        } else {
            this.descansar();
        }
    };
    
    Enemy.prototype.isAlive = function() {
        return this.alive;
    };
    Enemy.prototype.isStunned = function() {
        if (+new Date() - this.stunStart > this.stunTime) {
            this.stunStart = 0;
            return false;
        } else {
            return true;
        }
    };
    Enemy.prototype.isExhausted = function() {
        if (+new Date() - this.exhaustedStart > this.exhaustedTime) {
            this.exhaustedStart = 0;
            return false;
        } else {
            return true;
        }
    };
    
    Enemy.prototype.kill = function() {
        this.alive = false;
    };
    Enemy.prototype.stun = function() {
        this.stunStart = +new Date();
    };
    Enemy.prototype.exhausted = function() {
        this.exhaustedStart = +new Date();
    };
    Enemy.prototype.cansar = function() {
        this.stamina -= this.cansancio;
        
        if (stamina <= 0) {
            this.exhausted();
        }
    };
    Enemy.prototype.descansar = function() {
        this.stamina += this.recuperacion;
        
        if (this.stamina > this.maxStamina) {
            this.stamina = this.maxStamina;
        }
    };
    
    return Enemy;
});