function multiply (x, y) {
    return x * y;
}
multiply.version = "v.1.0.0";
console.log(multiply.version);

//Function factory
function makemultiplier(multiplier) {
    var myfunc = function (x) {
        return multiplier * x;
    };
    return myfunc;
}

var multiplyBy3 = makemultiplier(3);
console.log(multiplyBy3(10));
var doubleAll = makemultiplier(2);
console.log(doubleAll(100));

//Passing function as arguments
function doOp(x, operation) {
    return operation(x);
}

var result = doOp(5, multiplyBy3);
console.log(result);
result = doOp(100,doubleAll);
console.log(result);
