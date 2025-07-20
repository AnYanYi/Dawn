$(function () {
    'use strict';
    featured();
    pagination(false);
    scrollToTop();
});

function featured() {
    'use strict';
    $('.featured-feed').owlCarousel({
        dots: false,
        margin: 30,
        nav: true,
        navText: [
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" class="icon"><path d="M20.547 22.107L14.44 16l6.107-6.12L18.667 8l-8 8 8 8 1.88-1.893z"></path></svg>',
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" class="icon"><path d="M11.453 22.107L17.56 16l-6.107-6.12L13.333 8l8 8-8 8-1.88-1.893z"></path></svg>',
        ],
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            },
        },
    });
}

function scrollToTop() {
    'use strict';
    
    const scrollButton = $('#scrollToTop');
    
    // Show/hide button on scroll
    $(window).scroll(function() {
        const scrollTop = $(window).scrollTop();
        
        // Show button when scrolled down 200px
        if (scrollTop > 200) {
            scrollButton.fadeIn(300);
        } else {
            scrollButton.fadeOut(300);
        }
    });
    
    // Smooth scroll to top when clicked
    scrollButton.click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });
}
