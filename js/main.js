$(function)() {
    //Cache the window object
    var $window = $(window);

    //Parallax background effect
    $('section[data-type="background"]').each(function() {
        var $bgobj = $(this); // assigning the object

        $(window).scroll(function() {
            //Scroll the background at var speed
            // the Ypos is a negative bvalue because were scrolling it up

            var yPos = -($window.scrollTop() / $bgobj.data('speed'));

            var coords = '50% ' + yPos + 'px';

            //Move the background
            $bgobj.css({ backgroundPosition: coords });
        }); // end window scroll
    });
});