document.addEventListener('DOMContentLoaded', function () {
    registerBackgroundSky();
    registerTitleWelcome();

    ScrollReveal().reveal('.card', {
        distance: '200px',
        duration: 1000,
        easing: 'ease',
        viewFactor: 0.7
    });
});

function registerTitleWelcome() {
    new Typed('#title-welcome', {
        strings: [
            'Je suis développeur Front-end',
            'Je suis développeur Back-end',
            'Je suis développeur Full-stack',
            'Je suis Amine Bougassaa^600',
            'Bienvenue sur mon portfolio !',
        ],
        typeSpeed: 50,
    });
}

function registerBackgroundSky() {
    const container = document.querySelector('#background-sky');
    const animation = bodymovin.loadAnimation({
        container: container,
        path: './sky_bg.json',
        autoplay: true,
        loop: true,
    });

    ['data_ready', 'DOMLoaded'].forEach(event => {
        animation.addEventListener(event, () => {
            let svg = container.querySelector('svg');
            if (svg instanceof Element) {
                svg.setAttribute('preserveAspectRatio', 'xMidYMid slice')
            }
        });
    });
}
