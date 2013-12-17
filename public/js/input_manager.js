define(function (require) {
    var $ = require('jquery'),
        Vector = require('vector'),
        inputManager = {},
        mousePosition = new Vector(0, 0),
        clickPosition = new Vector(0, 0),
        mouseClicked = false,
        canvasRect;

    inputManager.init = function(canvas) {
        $(canvas).on('mousemove', onMouseMove);
        $(canvas).on('click', onMouseClick);
        canvasRect = canvas.getBoundingClientRect();
    };
    
    inputManager.getMousePosition = function () {
        return mousePosition;
    };
    
    inputManager.getClickPosition = function () {
        return clickPosition;
    };
    
    inputManager.isMouseClicked = function () {
        var clicked = mouseClicked;
        mouseClicked = false;
        
        return clicked;
    };
    
    function onMouseMove (event) {
        mousePosition.x = event.clientX - canvasRect.left;
        mousePosition.y = event.clientY - canvasRect.top;
        event.preventDefault();
    }
    
    function onMouseClick () {
        mouseClicked = true;
        clickPosition.x = event.clientX - canvasRect.left;
        clickPosition.y = event.clientY - canvasRect.top;
        event.preventDefault();
    }

    return inputManager;
});
