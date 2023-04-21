jQuery(document).ready(function () {
    "use strict";

    $("#menuzord").menuzord({
        align: "right"
    });

    $("#slider").owlCarousel({

        navigation: true, // Show next and prev buttons
        slideSpeed: 300,
        pagination: false,
        singleItem: true,
        navigationText: [
          "<i class='fa fa-long-arrow-left'></i>",
          "<i class='fa fa-long-arrow-right'></i>"
          ]

    });

    $(".editor-slider").owlCarousel({

        autoPlay: false, //Set AutoPlay to 3 seconds
        navigation: true, // Show next and prev buttons
        pagination: false,
        items: 5,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3],
        navigationText: [
          "<i class='fa fa-angle-left'></i>",
          "<i class='fa fa-angle-right'></i>"
          ]

    });
    var $container = $('.masonary-filter').isotope({
        itemSelector: '.filter-item',

        masonry: {
        columnWidth: 275,
            gutter: 80
        }
    });
    // filter functions
    var filterFns = {
        // show if number is greater than 50
        numberGreaterThan50: function () {
            var number = $(this).find('.number').text();
            return parseInt(number, 10) > 50;
        }
    };
    // bind filter button click
    $('#filters').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        // use filterFn if matches value
        filterValue = filterFns[filterValue] || filterValue;
        $container.isotope({
            filter: filterValue
        });
    });
    // change is-checked class on buttons
    $('.button-group').each(function (i, buttonGroup) {
        var $buttonGroup = $(buttonGroup);
        $buttonGroup.on('click', 'button', function () {
            $buttonGroup.find('.is-checked').removeClass('is-checked');
            $(this).addClass('is-checked');
        });
    });
    // toogle slide
    $(".left-side-menu").on('click', function() {
        $(".home-three-menu").slideToggle("slow");
    });
});

$(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
        $('.header').addClass("sticky");
    } else {
        $('.header').removeClass("sticky");
    }
});
