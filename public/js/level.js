define(function(require) {
    
    //var TileMap = require('tilemap');
    var Decoration = require('decoration'),
        Exit       = require('exit'),
        Enemy      = require('enemy'),
        Player     = require('player'),
        game       = require('game');
    
    var Level = function(file) {
        var json = require('json!data/' + file),
            i, l,
            entity;
        //this.tileSet = new TileMap(json.layers[0]);
        for(i = 0, l = json.layers[1].objects.length; i < l; i++) {
            entity = json.layers[1].objects[i];
            switch(entity.type) {
                case "decoration":
                    game.addEntity(new Decoration(entity.name, {x: entity.x, y: entity.y}));
                    break;
                case "enemy":
                    game.addEntity(new Enemy(entity.name, {x: entity.x, y: entity.y}));
                    break;
                case "exit":
                    game.addEntity(new Exit(entity.name, {x: entity.x, y: entity.y}, entity.texture));
                    break;
                case "player":
                    game.addEntity(new Player({x: entity.x, y: entity.y}));
                    break;
            }
        }
    };
    
    return Level;
});