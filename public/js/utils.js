define(function () {
    var utils = {};
    
    utils.rad2deg = function (rad) {
        return rad * (180 / Math.PI);
    };
    
    utils.deg2rad = function (deg) {
        return deg * (Math.PI / 180);
    };
    
    return utils;
});