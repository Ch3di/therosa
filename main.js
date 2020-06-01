//Select element function
const selectElement = function(element) {
    return document.querySelector(element);
};

let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');

menuToggler.addEventListener('click', function () {
    body.classList.toggle('open');
});

window.sr = ScrollReveal();

function revealIt(classname, origin){
    sr.reveal(classname, {
        origin: origin,
        duration: 1000,
        distance: '25rem',
        delay: 600
    });
}
revealIt('.animate-right','right')
revealIt('.animate-left','left')
revealIt('.animate-top','top')
revealIt('.animate-bottom','bottom')

