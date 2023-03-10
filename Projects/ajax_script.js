// Event handling
document.addEventListener("DOMContentLoaded", function (event) {

    // Unobstusive event binding
    document.querySelector("button").addEventListener("click", function () {

        // Call server to get the name 
        $ajaxUtils.sendGetRequest("name.json", function (res) {
            // var name = request.responseText;
            
            // document.querySelector("#content").innerHTML = "<h2>Hello " + name + "!";
            var message = res.fname + " " + res.lname;
            if (res.likesChineseFood) {
                message += " likes Chinese food";
            }
            else {
                message += " doesn't like Chinese food";
            }
            message += " and uses ";
            message += res.numberOfDisplays + 1;
            message += " displays for coding."; 

            document.querySelector("#content").innerHTML = "<h2>" + message + "<h2>";
        });
        
        
    });
});