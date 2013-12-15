define(function() {
    var game = {},  
        timeLastUpdate,
        entities = [],
        looping = false,
        ctx;
    
    game.init = function(canvas, cb) {
        timeLastUpdate = +new Date();
        ctx = canvas.getContext("2d");
        // aqui cargaremos texturas y demas
        cb();
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
        update(delta);
        render(ctx);
    }
    
    function render(ctx) {
        var i, l;
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