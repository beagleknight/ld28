define(function (require) {
    var $ = require('jquery');
    
    var inputManager = {};
    var posX, posY;
    var mouseClicked = false;

    inputManager.init = function(canvas) {
        $(canvas).on("mousemove", onMouseMove);
        $(canvas).on("mouseclick", onMouseClick);
    };
    
    inputManager.getPosicion = function () {
        return {'x': posX, 'y': posY};
    };
    inputManager.isMouseClicked = function () {
        var clicked = mouseClicked;
        mouseClicked = false;
        
        return clicked;
    };
    
    function onMouseMove (event) {
        posX = event.pageX;
        posY = event.pageY;
    }
    function onMouseClick () {
        mouseClicked = true;
    }
    

    return inputManager;
});
