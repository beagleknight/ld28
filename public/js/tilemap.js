define(function() {
    var resourceManager = require('resource_manager');
    
    var TileMap = function(map, collisionMap, width, height, tileSize) {
        this.width = width;
        this.height = height;
        this.tileSize = tileSize;
        this.map = map;
        this.collisionMap = collisionMap;
        this.tileSetTexture = resourceManager.getImage('tileset');
    };
    
    TileMap.prototype.render = function (ctx) {
        if (this.tileSetTexture) {
            var i, j;
            for(i = 0; i < this.height; i++) {
                for(j = 0; j < this.width; j++) {
                    ctx.drawImage(this.tileSetTexture, this.tileSize*(this.map[i*this.width+j]-1), 0, this.tileSize, this.tileSize, j*this.tileSize, i*this.tileSize, this.tileSize, this.tileSize);
                }
            }
        }
    };

    return TileMap;
});