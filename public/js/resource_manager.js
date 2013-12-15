define(function() {
    var resourceManager = {},
        images = {},
        textures = [
            { name: "player", path: "/assets/player.png" },
            { name: "enemy", path: "/assets/enemy.png" },
            { name: "window", path: "/assets/window.png" },
            { name: "door", path: "/assets/door.png" },
            { name: "tileset", path: "/assets/tileset.png" }
        ],
        loadedImages = 0;
    
    resourceManager.init = function(cb) {
        var i, l;
        for(i = 0, l = textures.length; i < l; i++) {
            loadImage(i);
        }
        var interval = setInterval(function() {
            if(textures.length === loadedImages) { 
                clearInterval(interval);
                cb(); 
            }
        }, 100);
    };
    
    resourceManager.getImage = function (imageId) {
        return images[imageId];
    };
    
    function loadImage(i) {
        var image = new Image();
        image.src = textures[i].path;
        image.onload = function() {
            images[textures[i].name] = image;
            loadedImages += 1;
        };
    }
    
    return resourceManager;
});