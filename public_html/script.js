$(document).ready(function(){
    
    //nav target animation
    $("a").on('click', function(event) {
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

    //nav color change and carousel fade on carousel scroll
    var colorChanged = false;
    var carouselShown = false;
    var navColorChangeOffset = 75;
    var lastScrollTop = 0;
    $(window).scroll(function() {
        var st = $(this).scrollTop();
        if (st > lastScrollTop){
            //going down carousel
            if ($(window).scrollTop()>=$("#carousel_section").position().top-$("#carousel_section").height()
                    && $(window).scrollTop()<=$("#carousel_section").position().top
                    && carouselShown==false) {
                $("#carousel_section").toggleClass("visible");
                carouselShown = true;
                console.log("1");
            }
            if ($(window).scrollTop()>=$("#carousel_section").position().top+$("#carousel_section").height()
                    && $(window).scrollTop()>=$("#carousel_section").position().top 
                    && carouselShown==true) {
                $("#carousel_section").toggleClass("visible");
                carouselShown = false;
                console.log("2");
            }
            //going down nav
            if ($(window).scrollTop()>=$("#carousel_section").position().top-navColorChangeOffset
                    && $(window).scrollTop()<=$("#carousel_section").position().top+$("#carousel_section").height()
                    && colorChanged==false) {
                $(".nav-link").toggleClass("visible");
                colorChanged = true;
                console.log("11");
            }
            if ($(window).scrollTop()>=$("#carousel_section").position().top+$("#carousel_section").height()
                    && $(window).scrollTop()>=$("#carousel_section").position().top
                    && colorChanged==true) {
                $(".nav-link").toggleClass("visible");
                colorChanged = false;
                console.log("22");
            }
        } else {
            //going up carousel
            if ($(window).scrollTop()<=$("#carousel_section").position().top+$("#carousel_section").height()
                    && $(window).scrollTop()>=$("#carousel_section").position().top
                    && carouselShown==false) {
                console.log("3");
                $("#carousel_section").toggleClass("visible");
                carouselShown = true;
            }
            if ($(window).scrollTop()<=$("#carousel_section").position().top-$("#carousel_section").height()
                    && $(window).scrollTop()<=$("#carousel_section").position().top 
                    && carouselShown==true) {
                $("#carousel_section").toggleClass("visible");
                carouselShown = false;
                console.log("4");
            }
//            
            //going up nav
            if ($(window).scrollTop()<=$("#carousel_section").position().top+$("#carousel_section").height()+navColorChangeOffset
                    && $(window).scrollTop()>=$("#carousel_section").position().top
                    && colorChanged==false) {
                $(".nav-link").toggleClass("visible");
                colorChanged = true;
                console.log("33");
            }
           if ($(window).scrollTop()<=$("#carousel_section").position().top-navColorChangeOffset
                   && $(window).scrollTop()<=$("#carousel_section").position().top+$("#carousel_section").height()
                   && colorChanged==true) {
               $(".nav-link").toggleClass("visible");
                colorChanged = false;
                console.log("44");
            }
        }
        lastScrollTop = st;
    });
    
    //scrollspy
    $('body').scrollspy({
        target: '#nav_links',
        offset: 400
    });
});