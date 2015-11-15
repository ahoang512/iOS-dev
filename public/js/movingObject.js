(function(root, document, undefined) {
  if (typeof Tanks === 'undefined') {
    root.Tanks = {};
  }

  var MovingObject = Tanks.MovingObject = function (details) {
    this.pos = details.pos;
    this.vel = details.vel;
    this.game = details.game;
  };

  MovingObject.prototype.move = function () {
    this.pos = [this.pos[0] + 5, this.pos[1] + 5];//- this.game.gravity];
  }

})(window, document);
