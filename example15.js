var Toilet = function(brand) {
  this.brand = brand;
  this.tankCapacity = 4.8;
};

Toilet.prototype.sanitize = function() {
  console.log("Sanitizing " + this.brand);
};

var FancyToilet = function(brand) {
  Toilet.call(this, brand);
  this.constructor = FancyToilet;
};

FancyToilet.prototype = new Toilet();
FancyToilet.prototype.useBidet = function() {
  console.log("Ahh, refreshing!");
};