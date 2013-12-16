define(function(require) {
    
    //var TileMap = require('tilemap');
    var Decoration = require('decoration'),
        Exit       = require('exit'),
        Enemy      = require('enemy'),
        Player     = require('player');
    
    var Level = function(game, data) {
        var i, l, entity;
        //this.tileSet = new TileMap(data.layers[0]);
        for(i = 0, l = data.layers[1].objects.length; i < l; i++) {
            entity = data.layers[1].objects[i];
            switch(entity.type) {
                case "decoration":
                    game.addEntity(new Decoration(entity.name, {x: entity.x, y: entity.y}));
                    break;
                case "enemy":
                    game.addEntity(new Enemy(entity.name, {x: entity.x, y: entity.y}));
                    break;
                case "exit":
                    game.addEntity(new Exit(entity.name, {x: entity.x, y: entity.y}, entity.properties.texture));
                    break;
                case "player":
                    game.addEntity(new Player({x: entity.x, y: entity.y}));
                    break;
            }
        }
    };
    
    return Level;
});