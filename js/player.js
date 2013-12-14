define(function () {
  var Player = function (name) {
      this.name = name;
  };

  Player.prototype.attack = function () {
      console.log("My name is " + this.name + ", you killed my father, prepare to die!");
  };

  return Player;
});
