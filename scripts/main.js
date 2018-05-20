$(document).ready(()=>{
    $("html").niceScroll({
        cursorcolor:"#42535b",
        cursorwidth:"7px",
    mousescrollstep: 10, // scrolling speed with mouse wheel (pixel)
        });

    let controller = new ScrollMagic.Controller();

    TweenMax.to("#intro .content h1", 2, {autoAlpha:1, ease:Power2.easeOutIn});    
    TweenMax.to("#intro .content p", 2, {autoAlpha:1, ease:Power2.easeOutIn, delay:1});    
    TweenMax.to(".c-scroll-down", 2, {autoAlpha:1, ease:Power2.easeOutIn, delay:2});    
    TweenMax.to(".c-scroll-down-after", 2, {y:15, ease:Bounce.easeOut, repeat:Infinity, repeatDelay:0.3, delay: 2});    
    
    
    let helloScreen = new ScrollMagic.Scene({
        triggerElement: '#intro',
        triggerHook: 0,
        duration: '90%',

    })
    .setTween(TweenMax.to('#intro', 0.1, {autoAlpha:0, ease:Power0.easeOut}))
    .addTo(controller);


    $('.titles').each(function(){
        let scene1 = new ScrollMagic.Scene({
            triggerElement: this.children[0],
            triggerHook:0.85,
            duration: '20%',
        })
        .setTween(TweenMax.from(this.children[0], 0.001, {autoAlpha:0, ease:Power0.easeNone}))
        //.addIndicators()
        .addTo(controller);
    })
        
    
    
})