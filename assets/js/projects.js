const projects = document.getElementById('projects')
const cardContainer = document.querySelector('.card-container')

const projectsData = [
    {
        title: "Calculator",
        image: "assets/img/projects/Calculator.png",
        description: "A simple functional calculator.",
        date: "Created on 11/17/2023.<br>Last updated on 11/17/2023.",
        link: "assets/projects/Calculator/index.html"
    },
    {
        title: "Game Store",
        image: "assets/img/projects/MAG.png",
        description: "A simple game store using HTML, CSS & JS.",
        date: "Created on 11/01/2023.<br>Last updated on 12/09/2023.",
        link: "assets/projects/Loja/app/index.html"
    },
    {
        title: "Gamble",
        image: "assets/img/projects/Gamble_white.png",
        description: "A simple slot machine using HTML, CSS & JS.",
        date: "Created on 12/15/2023.<br>Last updated on 12/16/2023.",
        link: "assets/projects/Gamble/index.html"
    },
    {
        title: "Gem Clicker",
        image: "assets/img/projects/Clicker.png",
        description: "A simple gem clicker game using HTML, CSS & JS.",
        date: "Created on 12/22/2023.<br>Last updated on 12/25/2023.",
        link: "assets/projects/Clicker/index.html"
    },
    {
        title: "Elysium",
        image: "assets/img/projects/Elysium.png",
        description: "Front-End school project.",
        date: "Created on 04/03/2024.<br>Last updated on 11/03/2024.",
        link: "assets/projects/Elysium/front/index.html"
    },
    {
        title: "Task Manager",
        image: "assets/img/projects/MAG-Task.svg",
        description: "Front-End Home, Login & Register page.",
        date: "Created on 11/03/2024.<br>Last updated on 25/03/2024.",
        link: "assets/projects/MAG-Task/index.html"
    }
]

projectsData.forEach((project) => {
    const div = document.createElement('div')
    div.classList.add('card')

    div.addEventListener('click', () => {
        if(project.link != ""){
            window.open(project.link, '_self')
        }else{
            window.open('undefined.html', '_self')
        }
        
    })

    div.innerHTML = `
    <div class="card-title">
        <h2>${project.title}</h2>
    </div>
    <div class="card-image">
        <img src="${project.image}" alt="">
    </div>
    <div class="card-description">
        <p>${project.description}</p>
        <br>
        <p class="date">${project.date}</p>
    </div>
    `

    cardContainer.appendChild(div)
})

document.getElementById("cards").onmousemove = e => {
    for(const card of document.getElementsByClassName("card")) {
      const rect = card.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;
  
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    };
}