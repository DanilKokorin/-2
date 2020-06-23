$(document).ready($(".slidewrapper").each(function (index, value) { 
    var contextSlider = $(this);
    var viewportWidth = contextSlider.parent('.viewport').width();
    var amtSlides = contextSlider.children().length;
    var widthSlider = viewportWidth * amtSlides;
    var widthSlide = viewportWidth;
    var slideNow = 1;
    var interval = 3000;
    contextSlider.css('width', (amtSlides * widthSlide) + 'px');
    contextSlider.siblings(".counter-slides").find(".total-slides").text((amtSlides));

    function autoSlide() {
        if (slideNow <= 0 || slideNow == amtSlides || slideNow > amtSlides) {
            contextSlider.css('left','0');
            slideNow = 1;
        } else {
            contextSlider.css('left',(-widthSlide * slideNow)+ 'px');
            slideNow++;
        }
        contextSlider.siblings(".counter-slides").find(".slide-now").text((slideNow));
    };

    contextSlider.siblings(".prev-next-btns").find(".prev-btn").click(function() { 
        if (slideNow <= 1 || slideNow > amtSlides){ 
            contextSlider.css('left', (-widthSlide * (amtSlides - 1)) + 'px');
            slideNow = amtSlides;
        } else {
            contextSlider.css('left', (-widthSlide * (slideNow - 2)) + 'px');
            slideNow--;
        }
        contextSlider.siblings(".counter-slides").find(".slide-now").text((slideNow));
    });

    contextSlider.siblings(".prev-next-btns").find(".next-btn").click(function() { 
        if (slideNow <= 0 || slideNow >= amtSlides) { 
            contextSlider.css('left', '0');
            slideNow = 1;
        } else {
            contextSlider.css('left', (-widthSlide * slideNow)+ 'px');
            slideNow++;
        }
        contextSlider.siblings(".counter-slides").find(".slide-now").text((slideNow));
    });

    var switchInterval = setInterval(autoSlide, interval);

    contextSlider.parent('.viewport').hover(function(){
        clearInterval(switchInterval);
    },function() {
        switchInterval = setInterval(autoSlide, interval);
    });

    if ( $(window).width() < 1200 ) {
        contextSlider.children('.slide').children('.slide-img').css('width', (viewportWidth) + 'px');
        var heightImg = contextSlider.children('.slide').children('.slide-img').height();
        contextSlider.children('.slide').children('.slide-img').css('height', (heightImg) + 160 + 'px');
        var heightTab = contextSlider.parent('.viewport').parent('.block-for-slider').parent('.tab').height();
        contextSlider.parent('.viewport').parent('.block-for-slider').parent('.tab').parent('.content').css('height', (heightTab) + 'px');
        contextSlider.parent('.viewport').css('height', (heightTab) + 'px');
    };
}));