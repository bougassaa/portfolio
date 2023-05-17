document.addEventListener('DOMContentLoaded', function () {
    const backgroundSkyContainer = document.querySelector('#background-sky');
    const backgroundSky = bodymovin.loadAnimation({
        container: backgroundSkyContainer,
        path: './sky_bg.json',
        autoplay: true,
        loop: true,
    });

    backgroundSky.addEventListener('DOMLoaded', () => {
        scaleLottieObject(1900, 1080, backgroundSkyContainer.querySelector('svg'));
    });

    new Typed('#title-welcome', {
        strings: [
            'Je suis développeur Front-end',
            'Je suis développeur Back-end',
            'Je suis développeur Full-stack',
            'Je suis Amine Bougassaa^1000',
            'Bienvenue sur mon portfolio !',
        ],
        typeSpeed: 50,
    });
})

window.addEventListener('resize', function () {
    const container = document.querySelector('#background-sky');
    scaleLottieObject(1900, 1080, container.querySelector('svg'));
})

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
}