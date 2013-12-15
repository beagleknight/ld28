define(function(require) {
    var resourceManager = require('resource_manager'),
        inputManager    = require('input_manager'),
        gameData        = require('game_data'),
        Level           = require('level');

    var game = {},  
        timeLastUpdate,
        entities = [],
        levels = [],
        looping = false,
        ctx;
    
    game.init = function(canvas, cb) {
        timeLastUpdate = +new Date();
        ctx = canvas.getContext("2d");
        inputManager.init(canvas);
        resourceManager.init(cb);
    };
    
    game.start = function() {
        if(!looping) {
            loop();
            looping = true;
        }
    };
    
    function loop() {
        window.requestAnimationFrame(loop);
        var now = +new Date();
        var delta = now - timeLastUpdate;
        timeLastUpdate = now;
        update(delta / 1000);
        render(ctx);
    }
    
    function render(ctx) {
        ctx.clearRect(0, 0, 640, 480);
        game.forEachEntity("all", function (entity) {
            entity.render(ctx);
        });
    }
    
    function update(delta) {
        game.forEachEntity("all", function (entity) {
            entity.update(delta);
        });
    }
    
    game.addEntity = function(entity) {
        entities.push(entity);
    };
    
    game.addLevel = function(levelId) {
        levels.push(new Level(game, gameData.levels[levelId]));
    };
    
    game.forEachEntity = function (entityGroup, cb) {
        var i, l;
        for(i = 0, l = entities.length; i < l; i++) {
            if (entityGroup === "all" || entities[i].group === entityGroup) {
                cb(entities[i]);
            }
        }
    };
    
    game.applyToEntity = function (name, cb) {
        game.forEachEntity("all", function (entity) {
            if (entity.name === name) {
                cb(entity);
            }
        }
    };
    
    return game;
});