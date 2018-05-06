var Toilet = function(brand) {
  this.brand = brand;
  this.tankCapacity = 4.8;
};

Toilet.prototype.sanitize = function() {
  console.log("Sanitizing " + this.brand);
};

var myToilet = new Toilet("Sloan");

myToilet.sanitize = function() {
  console.log("Setting fire to " + this.brand);
};