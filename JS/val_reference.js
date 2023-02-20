// Copy by value and reference

var a = 7;
var b = a;
console.log("a: " + a);
console.log("b: " + b);

b = 5;
console.log("after b update: ");
console.log("a: " + a);
console.log("b: " + b);

var a = { x: 7 };
var b = a;
console.log(a);
console.log(b);

b.x = 5;
console.log("after b.x update: ");
console.log(a);
console.log(b);

// Pass by value and reference
function changeprim(primVal) {
    console.log("in changePrim....");
    console.log("before:");
    console.log(primVal);

    primVal = 5;
    console.log("after:");
    console.log(primVal);
} 

var value = 7;
changeprim(value);
console.log("after changePrim, original value:");
console.log(value);

function changeObj(objVal) {
    console.log("in changeObj....");
    console.log("before:");
    console.log(objVal);

    objVal.x = 5;
    console.log("after:");
    console.log(objVal);
}

value = { x: 7};
changeObj(value);
console.log("after changeObj, original value:");
console.log(value);