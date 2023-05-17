document.addEventListener('DOMContentLoaded', function () {
    // let welcomeBot = bodymovin.loadAnimation({
    //     container: document.querySelector('#welcome-bot'),
    //     path: 'https://assets1.lottiefiles.com/packages/lf20_1pxqjqps.json', // todo : replace by file
    //     renderer: 'svg',
    //     autoplay: true,
    //     loop: false,
    // });
    // welcomeBot.onComplete = () => {
    //     document.documentElement.setAttribute('data-bs-theme', 'light')
    // }

    const container = document.querySelector('#background-sky')
    const backgroundSky = bodymovin.loadAnimation({
        container: container,
        path: './sky_bg.json',
        renderer: 'svg',
        autoplay: true,
        loop: true,
    });

    backgroundSky.addEventListener('DOMLoaded', () => {
        scaleLottieObject(1900, 1080, container.querySelector('svg'));
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

    svgElement.style.transform = `translateX(-${(newWidth/2) - (windowWidth / 2)}px)`;
    svgElement.style.transform = `translateY(-${(newHeight/2) - (windowHeight / 2)}px)`;
    svgElement.style.width = newWidth;
    svgElement.style.height = newHeight;
}