
//typed.js
var typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    backSpeed: 60,
    typeSpeed: 60,
    loop: true,
    loopCount: Infinity,
    showCursor: false,
    startDelay: 500
});


var params = {
    container: document.getElementById('lottie'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    animationData: animationData
};

var anim;

anim = lottie.loadAnimation(params);
