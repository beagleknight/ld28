define(function(require) {
    var Sprite = require('sprite'),
        utils  = require('utils');

    
    var Enemy = function(name, position) {
        Sprite.call(this, name, position, "enemy");
        this.alive = true;
        this.rotation = utils.deg2rad(-90);
        this.stunTime = 5000;
        this.stunStart = 0;
        this.stamina = 10000;
        this.maxStamina = 10000;
        this.exhaustedTime = 3000;
        this.exhaustedStart = 0;
        this.cansancio = 1;
        this.recuperacion = 3;
        this.avoiding = false;
        this.leaving = false;
        this.randomMove = false;
        this.velocityMod = 150;
        this.velocityModExhausted = 25;
        this.fearDistance = 50;
        this.visionDistance = 300;
    };
    Enemy.prototype = new Sprite(null, {});

    Enemy.prototype.update = function (dt) {
        Sprite.prototype.update.call(this, dt);

        if (!this.isStunned()) {
            var level = require('game').getCurrentLevel();
            var player, exit;
            
            var dist = 0;
            var distTemp = 0;
            level.applyToEntity("player", function(entity) {
                player = entity;
            });
            dist = this.position.dist(player.position);
            
            if (dist <= this.fearDistance) {
                this.avoiding = true;
            } else {
                dist = undefined;
                level.forEachEntity("exit", function(entity) {
                    distTemp = this.position.dist(entity.position);
                    
                    if (!dist || dist > distTemp) {
                        dist = distTemp;
                        exit = entity;
                    }
                });
                
                if (dist <= this.visionDistance) {
                    this.leaving = true;
                } else {
                    // TODO decisión quedarse quieto/moverse
                }
            }
            
            if (this.avoiding || this.leaving || this.randomMove) {
                if (this.avoiding) {
                    this.velocity.copy(player.velocity);
                } else if (this.leaving) {
                    this.velocity.copy(exit.position);
                    this.velocity.sub(this.position);
                    this.velocity.normalize();
                } else if (this.randomMove) {
                    // TODO
                }
                
                this.rotation = Math.atan2(this.velocity.y, this.velocity.x);
                if (this.isExhausted()) {
                    this.velocity.scalar(this.velocityModExhausted);
                    this.descansar(dt);
                } else {
                    this.velocity.scalar(this.velocityMod);
                    this.cansar(dt);
                }
            } else {
                this.velocity.scalar(0);
                this.descansar(dt);
            }
        } else {
            this.velocity.scalar(0);
            this.descansar(dt);
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
    
    Enemy.prototype.cansar = function(dt) {
        this.stamina -= this.cansancio * dt;
        
        if (this.stamina <= 0) {
            this.exhausted();
        }
    };
    
    Enemy.prototype.descansar = function(dt) {
        this.stamina += this.recuperacion * dt;
        
        if (this.stamina > this.maxStamina) {
            this.stamina = this.maxStamina;
        }
    };
    
    return Enemy;
});