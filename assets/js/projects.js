const projects = document.getElementById('projects')
const cardContainer = document.querySelector('.card-container')

const projectsData = [
    {
        title: "Calculator",
        image: "assets/img/projects/calculator.png",
        description: "A simple functional calculator.",
        date: "Created on 11/17/2023.<br>Last updated on 11/17/2023.",
        link: "assets/projects/calculator/index.html",
    },
    {
        title: "Wavetapper",
        image: "assets/img/projects/wavetapper.png",
        description: "A synchronized music animation using CSS & JS.",
        date: "Created on 11/17/2023.<br>Last updated on 11/29/2023.",
        link: "",
    },
    {
        title: "PlaceHolder",
        image: "assets/img/PH.png",
        description: "",
        date: "",
        link: "",
    },
    {
        title: "PlaceHolder",
        image: "assets/img/PH.png",
        description: "",
        date: "",
        link: "",
    },
    {
        title: "PlaceHolder",
        image: "assets/img/PH.png",
        description: "",
        date: "",
        link: "",
    },
    {
        title: "PlaceHolder",
        image: "assets/img/PH.png",
        description: "",
        date: "",
        link: "",
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

    if(project.title === "PlaceHolder" || project.description === ""){
        div.innerHTML = `
            <div class="card-title">
                <h2>${project.title}</h2>
            </div>
            <div class="card-image" style="filter: invert(100%)">
                <img src="${project.image}" alt="">
            </div>
            <div class="card-description">
            <p>${project.description}</p>
            <br>
            <p class="date">undefined</p>
        </div>
    `
    }else{
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
    }

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