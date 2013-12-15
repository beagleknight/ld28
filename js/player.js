define(function () {
  var Player = function (name) {
      this.name = name;
  };

  Player.prototype.attack = function () {
    console.log("My name is " + this.name + ", you killed my father, prepare to die!");

    window.alert("Luz");
    window.alert("Fuego");
    window.alert("Destrucción");
    window.alert("El mundo puede ser una ruina");
    window.alert("Hay que ponerse a programaaaaaaaarrr");
  };

  return Player;
});
