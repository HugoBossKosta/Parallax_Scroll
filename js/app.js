window.addEventListener('scroll', e => {
    document.body.style.cssText += `--scrollTop: ${this.scrollY}px`
});

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.container'
});


let soundButton = document.querySelector('.soundbutton'),
    audio = document.querySelector('.audio')

    soundButton.addEventListener('click', e => {
        soundButton.classList.toggle('paused');
        audio.paused ? audio.play() : audio.pause();
        audio.volume = 0.5;
    });
    // Убираем фокус
    window.onfocus = function() {
        // soundButton.classList.contains('paused') ? audio.pause() : audio.play();
        audio.pause();
        if (audio.pause) {
            soundButton.classList.add('paused');
        }        
    };
    // покидаем страницу
    window.onblur = function() {
        audio.pause();
    };