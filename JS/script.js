var message = 'in global';
console.log("Global: message = " + message);

var a = function() {
    var message = "inside a";
    console.log("a: message = " + message);
    b();
}

function b () {
    console.log("b: message = " + message);
}

a();

var x;
console.log(x)

if(x == undefined){
    console.log("x is undefined");
}

x = 5;
if(x == undefined){
    console.log("x is undefined");
}
else {
    console.log("x has been defined")
}

var string = "Hello";
string += " World";
console.log(string + "!");

var x = 4, y = 4;
if(x == y) {
    console.log("x = 4 is equal to y = 4");
} 

x = "4";
if (x == y) {
    console.log("x = '4' is equal to y = 4");
}

// Strict equality
if (x === y) {
    console.log("Strict: x = '4' is equal to y = 4");
}
else {
    console.log("Strict: x = '4' is not equal to y = 4");
}

// if statement (all false)
if (false || null || undefined || "" || 0 || NaN) {
    console.log("This line wont ever execute");
}
else {
    console.log("All false");
}

//if statement (all true)
if (true && "hello" && 1 && -1 && "false") {
    console.log("All true");
}

// Default values
function order(side) {
    // if(side === undefined) {
    //     side = "whatever!";
    // }
    //above if is same as 
    side = side || "whatever!"
    console.log("Chicken with " + side);
}

order("noodles!");
order();