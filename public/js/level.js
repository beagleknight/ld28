define(function(require) {
    
    var Decoration = require('decoration'),
        Exit       = require('exit'),
        Enemy      = require('enemy'),
        Player     = require('player'),
        TileMap    = require('tilemap');
    
    var Level = function(game, data) {
        var i, l, entity;
        
        this.entities = [];
        this.tileMap = new TileMap(data.layers[0].data, data.layers[1].data);

        for(i = 0, l = data.layers[2].objects.length; i < l; i++) {
            entity = data.layers[2].objects[i];
            switch(entity.type) {
                case "decoration":
                    this.addEntity(new Decoration(entity.name, {x: entity.x, y: entity.y}));
                    break;
                case "enemy":
                    this.addEntity(new Enemy(entity.name, {x: entity.x, y: entity.y}));
                    break;
                case "exit":
                    this.addEntity(new Exit(entity.name, {x: entity.x, y: entity.y}, entity.properties.texture));
                    break;
                case "player":
                    this.addEntity(new Player({x: entity.x, y: entity.y}));
                    break;
            }
        }
    };
    
    Level.prototype.addEntity = function(entity) {
        this.entities.push(entity);
    };
  
    Level.prototype.forEachEntity = function (entityGroup, cb) {
        var i, l;
        
        for(i = 0, l = this.entities.length; i < l; i++) {
            if (entityGroup === "all" || this.entities[i].group === entityGroup) {
                cb(this.entities[i]);
            }
        }
    };
    
    Level.prototype.applyToEntity = function (name, cb) {
        this.forEachEntity("all", function (entity) {
            if (entity.name === name) {
                cb(entity);
            }
        });
    };
    
    Level.prototype.render = function (ctx) {
        ctx.clearRect(0, 0, 640, 480);
        //this.tileMap.render(ctx);
        this.forEachEntity("all", function (entity) {
            entity.render(ctx);
        });
    };
    
    Level.prototype.update = function (delta) {
        this.forEachEntity("all", function (entity) {
            entity.update(delta);
        });
    };
    
    return Level;
});