define(function(require) {
    var resourceManager = require('resource_manager'),
        inputManager    = require('input_manager');

    var game = {},  
        timeLastUpdate,
        entities = [],
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
        var i, l;
        
        ctx.clearRect(0, 0, 640, 480);
        for(i = 0, l = entities.length; i < l; i++) {
            entities[i].render(ctx);
        }
    }
    
    function update(delta) {
        var i, l;
        for(i = 0, l = entities.length; i < l; i++) {
            entities[i].update(delta);
        }
    }
    
    game.addEntity = function(entity) {
        entities.push(entity);
    };
    
    return game;
});