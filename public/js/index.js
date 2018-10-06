$(document).ready(function () {

    $('.tooltipped').tooltip();

    $("#homeButton").on("click", function() {
        $("#portfolio").fadeOut(1).addClass("hidden");
        $("#contactMe").fadeOut(1).addClass("hidden");
        $("#portButton").css("opacity", "0.4");
        $("#contactButton").css("opacity", "0.4");
        $("#homeButton").css("opacity", "1.0");
        $("#home").fadeIn("slow").removeClass("hidden");
    })

    $("#portButton").on("click", function() {
        $("#home").fadeOut(1).addClass("hidden");
        $("#contactMe").fadeOut(1).addClass("hidden");
        $("#homeButton").css("opacity", "0.4");
        $("#contactButton").css("opacity", "0.4");
        $("#portButton").css("opacity", "1.0");
        $("#portfolio").fadeIn("slow").removeClass("hidden");
    })

    $("#contactButton").on("click", function() {
        $("#home").fadeOut(1).addClass("hidden");
        $("#portfolio").fadeOut(1).addClass("hidden");
        $("#homeButton").css("opacity", "0.4");
        $("#portButton").css("opacity", "0.4");
        $("#contactButton").css("opacity", "1.0");
        $("#contactMe").fadeIn("slow").removeClass("hidden");
    })

    $('.modal').modal();
    $('.modal').open()

});