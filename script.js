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
        path: './sky_bg.json', // todo : replace by file
        renderer: 'svg',
        autoplay: true,
        loop: true,
    });

    backgroundSky.addEventListener('DOMLoaded', () => {
        const largeurEcran = window.innerWidth;
        const hauteurEcran = window.innerHeight;

        const [nouvelleLargeur, nouvelleHauteur] = ajusterImage(largeurEcran, hauteurEcran);

        container.querySelector('svg').style.width = nouvelleLargeur;
        container.querySelector('svg').style.height = nouvelleHauteur;
    });
})

window.addEventListener('resize', function () {
    const container = document.querySelector('#background-sky')
    const largeurEcran = window.innerWidth;
    const hauteurEcran = window.innerHeight;

    const [nouvelleLargeur, nouvelleHauteur] = ajusterImage(largeurEcran, hauteurEcran);

    container.querySelector('svg').style.width = nouvelleLargeur;
    container.querySelector('svg').style.height = nouvelleHauteur;
})

function ajusterImage(largeurEcran, hauteurEcran, largeurImage = 1900, hauteurImage = 1080) {
    const rapportEcran = largeurEcran / hauteurEcran;
    const rapportImage = largeurImage / hauteurImage;

    if (rapportEcran > rapportImage) {
        // L'écran est plus large que l'image
        const nouvelleLargeur = largeurEcran;
        const nouvelleHauteur = largeurEcran / rapportImage;
        return [nouvelleLargeur, nouvelleHauteur];
    } else {
        // L'écran est plus haut que l'image
        const nouvelleHauteur = hauteurEcran;
        const nouvelleLargeur = hauteurEcran * rapportImage;
        return [nouvelleLargeur, nouvelleHauteur];
    }
}
