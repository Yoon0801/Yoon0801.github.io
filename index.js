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

// skills part js
$('.skillsHeader').on('click', function() {
    console.log('123');
    var itemClass = $(this).parent().attr('class');

    $('.skillsContent').removeClass('skillsOpen').addClass('skillsClose');
    if (itemClass === 'skillsContent skillsClose') {
        $(this).parent().removeClass('skillsClose').addClass('skillsOpen');
    }
});

// $('.skillsHeader').click(function () {
//     var content = $(this).next('.skillsContent');

//     if (content.hasClass('skillsClose')) {
//         console.log('123');
//         $('.skillsList').slideUp();
//         $('.skillsContent').removeClass('skillsOpen');
//         $('.skillsContent').addClass('skillsClose');
//         content.slideDown();
//         content.removeClass('skillsClose');
//         content.addClass('skillsContent skillsOpen');
//     } else {
//         console.log('456');
//         $('.skillsList').slideUp();
//         content.removeClass('skillsOpen');
//         content.addClass('skillsContent skillsClose');
//     }
// });
