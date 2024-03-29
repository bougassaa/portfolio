registerBackgroundSkyLottie();

document.addEventListener('DOMContentLoaded', function () {
    registerTitleWelcome();
    registerScrollDown();
    registerTypedCode();
    registerParallax();
    registerTooltip();
    registerReveal();
});

function registerTooltip() {
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
        .forEach(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
}

function registerScrollDown() {
    document.querySelector('#scroll-down')
        .addEventListener('click', function () {
        window.scrollTo(0, document.querySelector('#introduction-reveal').offsetTop - 40);
    });
}

function registerParallax() {
    new simpleParallax(document.querySelectorAll('.img-parallax'));
}

function registerTypedCode() {
    ['1', '2'].forEach(num => {
        new Typed('#typed-code-' + num, {
            strings: [`
            <span class="typed-statement">function</span> <span class="typed-func-name">sayHelloToVisitor</span>() {<br>
            <span class="typed-tab"></span>console.log(<span class="typed-string">"Amine te dit bonjour &#x1F44B;"</span>);<br>
            }<br>
            <span class="typed-comment">// call the function</span><br>
            <span class="typed-func-name">sayHelloToVisitor</span>();
        `],
            backDelay: 1400,
            typeSpeed: num === '2' ? 30 : 50,
            loop: true,
        });
    });
}

function registerReveal() {
    ScrollReveal().reveal('#hello-reveal', {
        distance: '250px',
        delay: 300,
        duration: 1400,
        easing: 'ease',
        origin: 'left',
        viewFactor: 1
    });

    ScrollReveal().reveal('#introduction-reveal', {
        duration: 1600,
        viewFactor: 0.5,
        mobile: false
    });

    ScrollReveal().reveal('#introduction-reveal', {
        duration: 1600,
        desktop: false,
        viewOffset: {
            bottom: 200
        }
    });

    ScrollReveal().reveal('.schools', {
        distance: '200px',
        duration: 1300,
        easing: 'ease',
        viewFactor: 0.60,
        mobile: false
    });

    ScrollReveal().reveal('.schools', {
        duration: 1300,
        desktop: false,
        viewOffset: {
            bottom: 180
        }
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
