$(document).ready(function() {
    $('.words').mouseenter(function() {
        $(this).fadeTo('fast', .95)
    });
    $('.words').mouseleave(function() {
       $(this).fadeTo('fast',.01); 
    });
});

$(document).ready(function() {
    $('.words').on('touchstart', function() {
        $(this).fadeTo('fast', .95)
    });
    $('.words').mouseleave(function() {
       $(this).fadeTo('fast',.01); 
    });
});