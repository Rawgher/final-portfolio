$(document).ready(function () {
    $('.tooltipped').tooltip();

    $("#homeButton").on("click", function() {
        $("#aboutMe").addClass("hidden");
        $("#portfolio").addClass("hidden");
        $("#contactMe").addClass("hidden");
        $("#home").removeClass("hidden");
    })

    $("#aboutButton").on("click", function() {
        $("#home").addClass("hidden");
        $("#portfolio").addClass("hidden");
        $("#contactMe").addClass("hidden");
        $("#aboutMe").removeClass("hidden");
    })

    $("#portButton").on("click", function() {
        $("#home").addClass("hidden");
        $("#aboutMe").addClass("hidden");
        $("#contactMe").addClass("hidden");
        $("#portfolio").removeClass("hidden");
    })

    $("#contactButton").on("click", function() {
        $("#home").addClass("hidden");
        $("#aboutMe").addClass("hidden");
        $("#portfolio").addClass("hidden");
        $("#contactMe").removeClass("hidden");
    })


});