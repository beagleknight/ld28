requirejs.config({
    paths: {
        jquery: '../bower_components/jquery/jquery'
    }
});

define(function (require) {
    var $ = require('jquery');
    
    $(function () {
        console.log("DOM ready");
    });
});