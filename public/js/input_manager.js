define(function (require) {
    var $ = require('jquery'),
        inputManager = {},
        posX, 
        posY,
        mouseClicked = false,
        canvasRect;

    inputManager.init = function(canvas) {
        $(canvas).on("mousemove", onMouseMove);
        $(canvas).on("mouseclick", onMouseClick);
        canvasRect = canvas.getBoundingClientRect();
    };
    
    inputManager.getPosition = function () {
        return {'x': posX, 'y': posY};
    };
    inputManager.isMouseClicked = function () {
        var clicked = mouseClicked;
        mouseClicked = false;
        
        return clicked;
    };
    
    function onMouseMove (event) {
        posX = event.pageX - canvasRect.left;
        posY = event.pageY - canvasRect.top;
    }
    function onMouseClick () {
        mouseClicked = true;
    }
    

    return inputManager;
});
