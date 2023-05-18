let SKY_SVG_SCALED = false;

document.addEventListener('DOMContentLoaded', function () {
    registerBackgroundSky();
    registerTitleWelcome();

    ScrollReveal().reveal('.card', {
        distance: '200px',
        duration: 1000,
        easing: 'ease',
        viewFactor: 1
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
            if (!SKY_SVG_SCALED && svg instanceof Element) {
                SKY_SVG_SCALED = true;
                let height = scaleLottieObject(1900, 1080, svg);
                document.querySelector('#scroll-down').style.top = (height - 110) + 'px';
            }
        });
    });
}

function scaleLottieObject(svgWidth, svgHeight, svgElement) {
    const windowWidth = window.innerWidth, windowHeight = window.innerHeight,
        windowRatio = windowWidth / windowHeight, svgRatio = svgWidth / svgHeight;
    let newWidth, newHeight;

    if (windowRatio > svgRatio) {
        // L'écran est plus large que l'image = desktop
        newWidth = windowWidth;
        newHeight = (windowWidth / svgRatio) - 12;
    } else {
        // L'écran est plus haut que l'image = mobile
        newWidth = (windowHeight * svgRatio) + 20;
        newHeight = windowHeight;
    }

    svgElement.style.transform = `translate(-${(newWidth/2) - (windowWidth / 2)}px, -${(newHeight/2) - (windowHeight / 2)}px`;
    svgElement.style.width = newWidth;
    svgElement.style.height = newHeight;

    return newHeight;
}
