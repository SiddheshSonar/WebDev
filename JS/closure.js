function makemultiplier(multiplier) {
    function b() {
        console.log("Multiplier is: " + multiplier);
    }
    b();
    return ( 
        function (x) {
        return multiplier * x;
    }
  );
}

var doubleAll = makemultiplier(2);
console.log(doubleAll(10));