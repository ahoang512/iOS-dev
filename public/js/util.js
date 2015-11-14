(function(root) {
  if (typeof Tanks === 'undefined') {
    root.Tanks = {};
  }

  var Util = Tanks.Util = {};

  var inherits = Util.inherits = function (child, parent) {
      function Surrogate () { this.constructor = child };
      Surrogate.prototype = parent.prototype;
      child.prototype = new Surrogate();
  };

})(this)
