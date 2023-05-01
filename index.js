$(window).on('load', function () {
    setTimeout(() => {
        $('.loader').addClass("loader loaderHidden");
    }, 500);

    $('.loader').on('transitionend', function () {
        $('body .loader').remove();
    });
});


/* nav part js */
$('#navToggle').click(function () {
    $('#navMenu').addClass('navMenu showMenu');
});


$('#navClose').click(function () {
    $('#navMenu').removeClass('showMenu');
});

$('.navLink').click(function () {
    $('#navMenu').removeClass('showMenu');
});