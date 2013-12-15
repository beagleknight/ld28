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
        Entity  = require('entity');
    
    $(function () {
        var canvas = $('#game')[0];
        
        game.init(canvas, function () {
            game.addEntity(new Entity(100, 100));
            game.start();
        });
    });
});