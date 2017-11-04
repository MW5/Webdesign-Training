$(document).ready(function(){
    
    //nav target animation
    $(".nav-link").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });

    //typewriter effect on about, nav color change, carousel fade, on  scroll
    var colorChanged = false;
    var carouselShown = false;
    var aboutTypewrited = false;
    var navColorChangeOffset = 75;
    var lastScrollTop = 0;
    $(window).scroll(function() {
        var st = $(this).scrollTop();
        if (st > lastScrollTop){
            //typewriter on about
            if ($(window).scrollTop()>=$("#about_section").position().top-$("#about_section").height()/2
                    && aboutTypewrited==false) {
                aboutTypewrited = true;
                $("#about_text").css("display", "inline-block");
                startTypewriting("#about_text", 50, 6000);
            }
            //going down carousel
            if ($(window).scrollTop()>=$("#carousel_section").position().top-$("#carousel_section").height()
                    && $(window).scrollTop()<=$("#carousel_section").position().top
                    && carouselShown==false) {
                $("#carousel_section").toggleClass("visible");
                carouselShown = true;
            }
            if ($(window).scrollTop()>=$("#carousel_section").position().top+$("#carousel_section").height()
                    && $(window).scrollTop()>=$("#carousel_section").position().top 
                    && carouselShown==true) {
                $("#carousel_section").toggleClass("visible");
                carouselShown = false;
            }
            //going down nav
            if ($(window).scrollTop()>=$("#carousel_section").position().top-navColorChangeOffset
                    && $(window).scrollTop()<=$("#carousel_section").position().top+$("#carousel_section").height()
                    && colorChanged==false) {
                $(".nav-link").toggleClass("visible");
                colorChanged = true;
            }
            if ($(window).scrollTop()>=$("#carousel_section").position().top+$("#carousel_section").height()
                    && $(window).scrollTop()>=$("#carousel_section").position().top
                    && colorChanged==true) {
                $(".nav-link").toggleClass("visible");
                colorChanged = false;
            }
        } else {
            //going up carousel
            if ($(window).scrollTop()<=$("#carousel_section").position().top+$("#carousel_section").height()
                    && $(window).scrollTop()>=$("#carousel_section").position().top
                    && carouselShown==false) {
                $("#carousel_section").toggleClass("visible");
                carouselShown = true;
            }
            if ($(window).scrollTop()<=$("#carousel_section").position().top-$("#carousel_section").height()
                    && $(window).scrollTop()<=$("#carousel_section").position().top 
                    && carouselShown==true) {
                $("#carousel_section").toggleClass("visible");
                carouselShown = false;
            }
            
            //going up nav
            if ($(window).scrollTop()<=$("#carousel_section").position().top+$("#carousel_section").height()+navColorChangeOffset
                    && $(window).scrollTop()>=$("#carousel_section").position().top
                    && colorChanged==false) {
                $(".nav-link").toggleClass("visible");
                colorChanged = true;
            }
           if ($(window).scrollTop()<=$("#carousel_section").position().top-navColorChangeOffset
                   && $(window).scrollTop()<=$("#carousel_section").position().top+$("#carousel_section").height()
                   && colorChanged==true) {
               $(".nav-link").toggleClass("visible");
                colorChanged = false;
            }
        }
        lastScrollTop = st;
    });
    
    //scrollspy
    $('body').scrollspy({
        target: '#nav_links',
        offset: 400
    });
    

    
    //start animations
        //heading typewriting
    setTimeout(function(){startTypewriting("#heading_text", 300, 3000);}, 3000);
        //floating leaf animation 
    setTimeout(function(){$("svg").addClass("moved");}, 3000);
    
    function startTypewriting(id, speed, fadeOffset) {
            //get initial value
        var initialText = $(id).text();
        var typewritten = "";
        //clean before typewriting
        $(id).text(typewritten);
        $(id).fadeIn(fadeOffset);

        //set interval between letters
        var interval = setInterval(function() {
            typewrite();
            },speed
        );

        var i =0;
        function typewrite() {
            if(i<initialText.length) {
                typewritten += initialText.charAt(i);
                $(id).text(typewritten);

            } else {
                clearInterval(interval);
            }
            i++;
        }
    }

});