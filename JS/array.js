var arr = new Array();
arr[0] = "Sid";
arr[1] = 2;
arr[2] = function (name) {
    console.log("Hello " + name);
};
arr[3] = {course: "HTML, CSS & JS"};

console.log(arr);
console.log(arr[1]);
arr[2](arr[0]);
console.log(arr[3].course);

//Short hand array creation
var names = ["N1", "N2", "N3"];
console.log(names)

for(var i = 0 ; i < names.length ; i++) {
    console.log("Hello " + names[i])
}
names[100] = "N100"
for(var i = 0 ; i < names.length ; i++) {
    console.log("Hello " + names[i])
}

var names2 = ["N1", "N2", "N3"];

var myObj = {
    name: "Sid", course: "HTML/CSS/JS", platform: "Coursera"
};

for(var prop in myObj) {
    console.log(prop + ":" + myObj[prop]);
}

for (var name in names2) {
    console.log("Hello " + names2[name]);
}

names2.greeting = "Hi!";

for (var name in names2) {
    console.log("Hello " + names2[name]);
}
