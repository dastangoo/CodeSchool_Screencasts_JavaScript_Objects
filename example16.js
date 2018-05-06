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

var fixedToilet = new FancyToilet("Kohler");
console.log(fixedToilet.constructor);


var createdToilet = Object.create(fixedToilet);
console.log(createdToilet.useBidet());

console.log(createdToilet.brand);