//Object creation
var company = new Object();
company.name = "Facebook";
company.ceo = new Object();
company.ceo.fname = "Mark";
company.ceo.fcolour = "Blue";

console.log(company);
console.log("Company CEO name is: " + company.ceo.fname);

console.log(company["name"]);
console.log(company.name);
company["stock of company"] = 110
//or
//var sname = "stock of company"
//company[sname] = 110
console.log(company);
console.log("Stock price is: " + company["stock of company"])

//Better way: object literal
var facebook = {
    name: "Facebook",
    ceo: {
        fname: "Mark",
        fcolour: "Blue"
    },
    // $stock: 110
    "stock of company": 110
};

console.log(facebook);
console.log(facebook.ceo.fname);  