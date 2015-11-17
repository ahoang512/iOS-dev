(function(root, document, undefined) {
  if (typeof Tanks === 'undefined') {
    root.Tanks = {};
  }

  var MovingObject = Tanks.MovingObject = function (details) {
    this.pos = details.pos;
    this.vel = details.vel;
    this.game = details.game;
    this.radius = details.radius;
    this.gravity = 9.8;
    this.time = 0;
  };

  MovingObject.prototype.move = function (move) {
    if(this.pos[1] + this.radius < 300) {
      this.time += 1/32; //increment air time
      this.pos = [this.pos[0], this.pos[1] + (1/2)*this.gravity*(Math.pow(this.time,2))];
    }

    else {
      this.pos = [this.pos[0], 300 - this.radius];
      this.time = 0; //reset air time
    }

    this.pos[0] += move[0];
    this.pos[1] += move[1];
  }

})(window, document);
