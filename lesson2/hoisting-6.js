/* eslint-disable vars-on-top */
function Pet(name, image) {
  this.name = name;
  this.image =  image;
}

let Image;
var catImage;
var pudding;

Pet.prototype.walk = function() {
  console.log(`${this.name} is walking.`);
};

Image = class {
  constructor(file) {
    this.file = file;
  }
};

catImage = new Image("cat.png");
// eslint-disable-next-line no-unused-vars
pudding = new Pet("Pudding", catImage);