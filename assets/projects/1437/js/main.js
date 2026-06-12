const input = document.getElementById('nameInput');
const submitBtn = document.getElementById('submitBtn');
const splash = document.querySelector('.splash');
const container = document.querySelector('.container');

// Sparkle effect

let index = 0,
    interval = 5000;

const rand = (min, max) => 
  Math.floor(Math.random() * (max - min + 1)) + min;

const animate = star => {
  star.style.setProperty("--star-left", `${rand(-10, 100)}%`);
  star.style.setProperty("--star-top", `${rand(-40, 80)}%`);

  star.style.animation = "none";
  star.offsetHeight;
  star.style.animation = "";
}

for(const star of document.getElementsByClassName("magic-star")) {
  setTimeout(() => {
    animate(star);
    
    setInterval(() => animate(star), 1000);
  }, index++ * (interval / 3))
}


submitBtn.addEventListener('click', () => {
    console.log('Botão clicado');
    let name = input.value.trim();
    name = name.toUpperCase();
    console.log('Nome digitado:', name);
    if(name === "KAUANY LOPES GONÇALVES") {
        splash.classList.add('hidden');
        container.classList.remove('hidden');
    } else {
        alert('Sério isso?');
    }
});

