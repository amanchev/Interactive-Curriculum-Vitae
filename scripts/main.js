$(document).ready(() => {
    
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        $('#intro').css('height', '95vh')
       }
    let controller = new ScrollMagic.Controller();

    TweenMax.to("#intro .content h1", 2, { autoAlpha: 1, ease: Power2.easeOutIn });
    TweenMax.to("#intro .content p", 2, { autoAlpha: 1, ease: Power2.easeOutIn, delay: 1 });
    TweenMax.to(".scroll-down", 2, { autoAlpha: 1, ease: Power2.easeOutIn, delay: 2 });
    TweenMax.to(".scroll-down-dot", 2, { y: 15, ease: Bounce.easeOut, repeat: Infinity, repeatDelay: 0.3, delay: 2 });


    let helloScreen = new ScrollMagic.Scene({
        triggerElement: '#intro',
        triggerHook: 0,
        duration: '90%',

    })
        .setTween(TweenMax.to('#intro', 0.1, { autoAlpha: 0, ease: Power0.easeOut }))
        .addTo(controller);


    $('.titles').each(function () {
        let titles = new ScrollMagic.Scene({
            triggerElement: this.children[0],
            triggerHook: 0.85,
            duration: '20%',
        })
            .setTween(TweenMax.from(this.children[0], 0.001, { autoAlpha: 0, ease: Power0.easeNone }))
            //.addIndicators()
            .addTo(controller);
    })

    $('.element').each(function () {
        let tweenMaxObj = new TimelineMax();

        tweenMaxObj
            .from(this.children[0].children[0], 0.3, { x: -25, y: -25, autoAlpha: 0, ease: Power1.easeOut, delay: 0.2 })
            .from(this.children[0].children[1], 0.3, { x: -25, y: 25, autoAlpha: 0, ease: Power1.easeOut, delay: 0.1 });

        if (this.children[0].children[2] !== undefined) {
            tweenMaxObj
                .from(this.children[0].children[2], 0.3, { x: -25, y: 25, autoAlpha: 0, ease: Power1.easeOut, delay: 0.2 })
        }

        if (this.children[1] !== undefined) {
            tweenMaxObj
                .from(this.children[1].children[0], 0.3, { x: -25, y: 0, autoAlpha: 0, ease: Power1.easeOut, delay: 0.2 })

            if (this.children[1].children[1] !== undefined) {

                Object.values(this.children[1].children[1].children).forEach(element => {
                    tweenMaxObj
                        .from(element, 0.2, { x: -25, y: -25, autoAlpha: 0, ease: Power1.easeOut, delay: 0 })
                });
            }
        }
        console.log(this);
        let info = new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: 0.60,

        })
            .setTween(
                tweenMaxObj
            )
            //.addIndicators()
            .addTo(controller);
    })


  



})