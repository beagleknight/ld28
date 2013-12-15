define(function() {
    var textures = [
      { name: "test", path: "/assets/test.png" }
    ];
    
    var images = {};
    
    var resourceManager = {};
    
    resourceManager.init = function(cb) {
        var i, l;
        for(i = 0, l = textures.length; i < l; i++) {
            loadImage(i);
        }
        var interval = setInterval(function() {
            if(textures.length === images.length) { 
                clearInterval(interval);
                cb(); 
            }
        }, 1000);
    };
    
    function loadImage(i) {
        var image = new Image();
        image.src = textures[i].path;
        image.onload = function() {
            images[textures[i].name] = image;
        };
    }
    
});