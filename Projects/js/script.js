$(function() { // Same as document.addEventListener("DOMContentLoaded"....)

    // Same as document.querySelector("#navbarToggle").addEventListener("blur")
    $("#navbarToggle").blur(function (event) {
        var screenwidth = window.innerWidth;
        if(screenwidth < 768) {
            $("#navbarSupportedContent").collapse('hide');
        }
    });
});