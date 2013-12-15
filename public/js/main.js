requirejs.config({
    basePath: 'js',
    paths: {
        jquery: '../bower_components/jquery/jquery',
        data: '../data',
        json: '../bower_components/requirejs-plugins/src/json',
        text: '../bower_components/requirejs-plugins/lib/text'
    }
});

define(function (require) {
    var $       = require('jquery'),
        game    = require('game'),
        Player  = require('player'),
        Enemy  = require('enemy'),
        Exit  = require('exit');
    
    $(function () {
        var canvas = $('#game')[0];
        
        game.init(canvas, function () {
            game.addEntity(new Player({ x: 100, y: 100 }));
            game.addEntity(new Enemy("enemy1", { x: 300, y: 100 }));
            game.addEntity(new Exit("door1", { x: 100, y: 300 }, "door"));
            game.addEntity(new Exit("window1", { x: 300, y: 300 }, "window"));
            game.start();
        });
    });
});