$(document).ready(function () {

    const scrollTop = $(".scrollTop");

    $(window).scroll(function () {
        // declare variable
        var topPos = $(this).scrollTop();

        // if user scrolls down - show scroll to top button
        if (topPos > 100) {
            $(scrollTop).css("opacity", "1");

        } else {
            $(scrollTop).css("opacity", "0");
        }

    }); // scroll END

    //Click event to scroll to top
    $(scrollTop).click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;

    }); // click() scroll top EMD

    //////////////////////////////////////////////////////////
    // animated text
    const typed = new Typed(".typed", {
        strings: ["Software Engineer"],
        loop: true,
        typeSpeed: 50,
        backSpeed: 50,
        backDelay: 1000
    });
    // animated text
    /////////////////////////////////////////////////////////
    // tabs
    $('.tabs').tabs();
    /////////////////////////////////////////////////////////
    // tabs
});

/////////////////////////////////////////////////////////
// sidenav
const sidenav = document.querySelectorAll('.sidenav');
M.Sidenav.init(sidenav, {});
// sidenav