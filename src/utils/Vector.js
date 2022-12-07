//creating Vector object
var Vector = function(x,y) {
    this.x = x;
    this.y = y;
} 

Vector.prototype.normalize = function() {
    var length = Math.sqrt(this.x*this.x+this.y*this.y); //calculating length
    this.x = this.x/length; //assigning new value to x (dividing x by length of the vector)
    this.y= this.y/length; //assigning new value to y
}

export default Vector;