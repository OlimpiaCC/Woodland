const menuBtn = document.querySelector('.menu-btn'),
    menu = document.querySelector('.nav-right');

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
}



const anchorlinks = document.querySelectorAll('a[href^="/#"], a[href^="#"]');

for (let item of anchorlinks) {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        let hashval = item.getAttribute('href');
        hashval = hashval.replace('/', '');
        let target = document.querySelector(hashval);

        //target = target.getBoundingClientRect().top + window.pageYOffset - 120;
        // window.scrollTo({top: target, behavior: 'smooth'});
        // target.scrollIntoView({
        //     behavior: 'smooth',
        //     block: 'start'
        // });
        SmoothVerticalScrolling(target, 275, "top");
        history.pushState(null, null, hashval);

    });
}

function SmoothVerticalScrolling(e, time, where) {
    var eTop = e.getBoundingClientRect().top;

    if (window.innerWidth < 960) {
        eTop = eTop - 20;
    }
    var eAmt = eTop / 100;
    var curTime = 0;
    while (curTime <= time) {
        window.setTimeout(SVS_B, curTime, eAmt, where);
        curTime += time / 100;
    }
}


function SVS_B(eAmt, where) {
    if (where == "center" || where == "")
        window.scrollBy(0, eAmt / 2);
    if (where == "top")
        window.scrollBy(0, eAmt);
}


var slider = tns({
    container: '.gallery',
    items: 1,
    autoplay: true,
    autoplayTimeout: 4000,
    controls: true,
    nav: false,
    autoplayButton: false,
    autoplayButtonOutput: false,
    touch: true,
    mouseDrag: true,
    responsive: {
        960: {
            items: 3
        }
    },
    onInit: activeSlides
});

slider.events.on('transitionEnd', activeSlides);

function activeSlides(info) {
    if (document.querySelector('.slide.active')) {
        document.querySelector('.slide.active').classList.remove('active')
    }

    let i = info.index + 2;
    document.querySelector('.slide:nth-child(' + i + ')').classList.add('active')
}