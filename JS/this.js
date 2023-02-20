function test() {
    console.log(this);
    this.myName = "Sid";
}

test();
console.log(window.myName);

//Function constructor
function Circle (radius) {
    // console.log(this);
    this.radius = radius;
    // this.getArea = function () {
    //     return Math.PI * Math.pow(this.radius,2);
    // };
} 
Circle.prototype.getArea = function() {
    return Math.PI * Math.pow(this.radius,2);
}

var myCircle = new Circle(10); //new object
console.log(myCircle);

var myOtherCircle = new Circle(20);
console.log(myOtherCircle);

//Object literals and "this"
var literalCircle = {
    radius: 10,
    getArea: function () {
        console.log(this);
        return Math.PI * Math.pow(this.radius,2);

    }
};

console.log(literalCircle.getArea());