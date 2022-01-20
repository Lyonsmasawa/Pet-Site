

$(document).ready(function() {
    $("#adoptCat1").click(function() {
        $(".adoption-details").toggle();
    });

    $("#adoptDog1").click(function() {
        $(".adoption-details").toggle();
    });

    $("#adoptHamster").click(function() {
        $(".adoption-details").toggle();
    });

    $("#adoptDog2").click(function() {
        $(".adoption-details").toggle();
    });

    $("#adoptDog3").click(function() {
        $(".adoption-details").toggle();
    });

    $("#adoptCat2").click(function() {
        $(".adoption-details").toggle();
    });

    $("#adoptDog4").click(function() {
        $(".adoption-details").toggle();
    });

    $("#adoptHamsters").click(function() {
        $(".adoption-details").toggle();
    });

    $("form#adopt").submit(function(event) {
        event.preventDefault();
        var name = $("#name").val();
        alert("Hello " + name + ". " + "We have received your adoption request. Please visit our offices to finalize the adoption process.");
        $("#adopt")[0].reset();
    });
});