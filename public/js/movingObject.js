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
    if(this.pos[1] < 300) //if above ground, gravity effects it (for Tanks only)
      this.pos = [this.pos[0], this.pos[1] + 9.8]; //use as velocity for now
  }

})(window, document);
