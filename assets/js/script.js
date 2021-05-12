//add Bulma font-sizng-classes
$('h1').addClass('is-size-1-desktop is-size-2-tablet is-size-3-mobile');
$('h2').addClass('is-size-3-desktop is-size-4-tablet is-size-5-mobile');
$('h3').addClass('is-size-3-desktop is-size-4-tablet is-size-5-mobile');
$('a').addClass('is-size-4-tablet is-size-5-mobile');
$('p').addClass('is-size-5-tablet is-size-6-mobile');
$('.social-icon').addClass('is-size-2-desktop is-size-3-tablet is-size-4-mobile')

//controls function of mobile burger menu as well as the email contact form
$(document).ready(function () {
    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function () {

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");

    });
});