document.addEventListener('DOMContentLoaded', function () {
    registerBackgroundSkyLottie();
    registerTitleWelcome();
    registerReveal();

    ScrollReveal().reveal('.card', {
        distance: '200px',
        duration: 1300,
        easing: 'ease',
        viewFactor: 1
    });
});

function registerReveal() {
    ScrollReveal().reveal('#hello-reveal', {
        distance: '250px',
        duration: 1300,
        easing: 'ease',
        origin: 'left',
        viewFactor: 1
    });

    ScrollReveal().reveal('#introduction-reveal', {
        duration: 2000,
        viewFactor: 0.6
    });
}

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

function registerBackgroundSkyLottie() {
    const container = document.querySelector('#background-sky');
    const animation = bodymovin.loadAnimation({
        container: container,
        path: './assets/lotties/sky_bg.json',
        autoplay: true,
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
