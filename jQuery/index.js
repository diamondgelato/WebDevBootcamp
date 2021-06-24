$(document).on("keypress", function (event) {
    $("h1").text(event.key);
});

$(document).on("mouseover", function (event) {
    $("h1").css("color", "purple");
    $("h1").css("background-color", "yellow");
});