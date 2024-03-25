const sections = document.querySelectorAll('.section');
const header = document.querySelector('header');
const priceCards = document.querySelectorAll('.card');
const infos = document.querySelectorAll('.info');

const orbs = document.querySelectorAll('.orb');
const colors = [
    'var(--purple-100)',
    'var(--turquoise-100)',
    'var(--turquoise-200)',
    'var(--pink-100)',
];
if(document.querySelector('.lr') == null) {
    window.addEventListener('keydown', e => {
        if (e.key === 't' || e.key === 'T') {
            window.location.href = 'assets/pages/login.html';
        } 
    })
}

window.addEventListener('scroll', () => {
    header.classList.toggle('opaque', window.scrollY > 0);
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - sectionHeight / 3) {

            if(section.classList.contains('second')) {
                numberAnimation(section);
            }
            section.classList.add('active');
        };
    });
});

const handleOnMouseMove = e => {
    const { currentTarget: target } = e;

    const rect = target.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;

    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
}

for (const card of document.querySelectorAll(".info")) {
    card.onmousemove = e => handleOnMouseMove(e);
}

for(const card of document.querySelectorAll(".card")) { 
    card.onmousemove = e => handleOnMouseMove(e);
}

priceCards.forEach((card, index) => {
    index = index + 1
    card.style = `animation-delay: ${index * 0.2}s;`
});

orbs.forEach((orb, index) => {
    let randomHeight = Math.random() * 100;

    let randomColor = colors[Math.floor(Math.random() * colors.length)];

    orb.style = `animation: orb ${index * 5}s ease-in-out infinite; height: ${randomHeight}%; background: ${randomColor};`;
});

infos.forEach(info => {
    info.querySelector('h3').innerText = `0M+`
})

const numberAnimation = (section) => {
    if(section.classList.contains('active')) return;
    infos.forEach(info => {
        let number = parseInt(info.getAttribute('data-value'));
        let count = 0;
        let duration = number / 3;
        let counter = setInterval(() => {
            info.querySelector('h3').innerText = `${++count}M+`
            if (count == number) {
                clearInterval(counter);
            };
        }, duration);
    });
}

