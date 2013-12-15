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
        level0  = require('json!data/level0.json'); // usando require.js podemos leer ficheros json ahora
    
    $(function () {
        console.log('DOM ready');
        console.log(level0);
    });
});