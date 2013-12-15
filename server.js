// web.js
var express = require("express"),
    app = express(),
    port = process.env.PORT || 8080;


app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use(express.static(__dirname + '/public'));

app.listen(port, function() {
    console.log("Listening on " + port);
});
