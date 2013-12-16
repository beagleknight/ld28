define(function(require) {
    var resourceManager = require('resource_manager'),
        inputManager    = require('input_manager'),
        gameData        = require('game_data'),
        Level           = require('level'),
        currentLevelId  = null;

    var game = {},  
        timeLastUpdate,
        levels = {},
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
    
    game.addLevel = function(levelId) {
        levels[levelId] = new Level(game, gameData.levels[levelId]);
        if (currentLevelId === null) {
            game.setCurrentLevel(levelId);
        }
    };
    
    game.setCurrentLevel = function(levelId) {
        currentLevelId = levelId;
    };
    
    game.getCurrentLevel = function () {
        return levels[currentLevelId];
    };
    
    function loop() {
        window.requestAnimationFrame(loop);
        var now = +new Date();
        var delta = now - timeLastUpdate;
        timeLastUpdate = now;
        if (currentLevelId) {
            levels[currentLevelId].update(delta / 1000);
            levels[currentLevelId].render(ctx);
        }
    }
    
    return game;
});