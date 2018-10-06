$(document).ready(function () {
    $('.tooltipped').tooltip();

    $("#homeButton").on("click", function() {
        $("#portfolio").fadeOut(1).addClass("hidden");
        $("#contactMe").fadeOut(1).addClass("hidden");
        $("#home").fadeIn("slow").removeClass("hidden");
    })

    $("#portButton").on("click", function() {
        $("#home").fadeOut(1).addClass("hidden");
        $("#contactMe").fadeOut(1).addClass("hidden");
        $("#portfolio").fadeIn("slow").removeClass("hidden");
    })

    $("#contactButton").on("click", function() {
        $("#home").fadeOut(1).addClass("hidden");
        $("#portfolio").fadeOut(1).addClass("hidden");
        $("#contactMe").fadeIn("slow").removeClass("hidden");
    })

    $('.modal').modal();
    $('.modal').open()

});