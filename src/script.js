$(document).ready(function() {
    $("#menu-btn").click(function() {
        $("#nav-links").slideToggle(300);
    });

    // Reset menu visibility on resize
    $(window).resize(function() {
        if ($(window).width() >= 768) {
            $("#nav-links").show();
        } else {
            $("#nav-links").hide();
        }
    });
    $(window).on("scroll", function() {
        if ($(this).scrollTop() > 50) {
            $(".header").addClass("bg-white shadow-md");
        } else {
            $(".header").removeClass("bg-white shadow-md");
        }
    });
});