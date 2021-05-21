//change sevices

headers = document.querySelectorAll('.services .service_type .service');
descriptions = document.querySelectorAll('.services .services_detail');
for (let i = 0; i < headers.length; i++) {
    headers[i].addEventListener("mouseover", function () {
        var activeDescription = document.querySelector(".services .active_detail");
        activeDescription.classList.remove("active_detail");
        descriptions[i].classList.add("active_detail");
    });
}


//toggle menu

toggle_button = $('.toogle_menu');
navbar_collapse = $('.navbar-collapse');

navbar_overlay = $('.nav_overlay');

toggle_button.click(function () {
    $(this).toggleClass("open");

    if ($(this).hasClass("open")) {
        navbar_collapse.css("display", "block");

        navbar_collapse.animate({
            right: '0'
        }, 500);

        navbar_overlay.animate({
            opacity: '1'
        }, 500);
        navbar_overlay.css("pointer-events", "auto");
    } else {
        navbar_collapse.animate({
            right: '-100%'
        }, 500);

        navbar_overlay.animate({
            opacity: '0'
        }, 500);

        navbar_overlay.css("pointer-events", "none");
    }
});

navbar_overlay.click(function () {
    toggle_button.removeClass("open");
    navbar_collapse.animate({
        right: '-100%'
    }, 500);
    navbar_overlay.animate({
        opacity: '0'
    }, 500);
    navbar_overlay.css("pointer-events", "none");


})