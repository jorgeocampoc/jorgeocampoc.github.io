/**Selecciones globales */
const btnMenu = document.getElementById("btn-menu");
const skilltext = document.getElementById("skill-text");
const aboutMe = document.getElementById("aboutMe");

let myInfo = {
  name: "Jorge Ocampo Cerezo",
  skills:
    "Como Ingeniero de Sistemas con un diplomado en programación, he " +
    "adquirido una sólida base en " +
    "desarrollo de software. Mi formacion me ha permitido" +
    " dominar varios lenguajes de programacion asi como tambien tecnologias clave.",
  aboutMe:
    "Hola, soy Jorge, Ingeniero de Sistemas con una profunda pasión " +
    "por el desarrollo de software y las tecnologías emergentes." +
    " Aunque actualmente no tengo experiencia profesional en el campo," +
    " he adquirido un sólido conocimiento en una variedad de lenguajes" +
    " de programación y herramientas a través de estudios autodidactas" +
    " y proyectos personales.",
};
let barsColors = [
  "#F5DE19",
  "#027287",
  "#659036",
  "#DD0031",
  "#E65126",
  "#1572B6",
  "#E2E5E7",
  "#13AA52",
  "#507E9C",
  "#70AD51",
];

document.addEventListener("DOMContentLoaded", setInfo());

/** Funciona para la carga del bar loading */
function createBarLaodingDiv() {
  for (let i = 1; i < 11; i++) {
    let loadingBar = document.getElementById(`loaBar-${i}`);
    let porcetLoading = Number(loadingBar.getAttribute("value"));
    let width = 0;
    let interval = setInterval(animateLoadingBar, porcetLoading);
    function animateLoadingBar() {
      if (width >= porcetLoading) {
        clearInterval(interval);
      } else {
        width++;
        loadingBar.style.borderRadius = "10px";
        loadingBar.style.backgroundColor = barsColors[i - 1];
        loadingBar.style.width = width + "%";
        // loadingBar.textContent = width + '%';
        loadingBar.style.textAlign = "center";
      }
    }
  }
}

//Funcion para inciiar los valores
function setInfo() {
  skilltext.textContent = myInfo.skills;
  aboutMe.textContent = myInfo.aboutMe;

  createBarLaodingDiv();
}

/**Efecto suave en el header */
window.addEventListener("scroll", function () {
  const header = document.getElementById("header");
  const scrollPos = window.scrollY || document.documentElement.scrollTop;
  const vh = window.innerHeight / 100;
  const threshold = 20 * vh;

  if (scrollPos > threshold) {
    header.classList.remove("stickyFinish");
    header.classList.add("sticky");
    header.classList.add("shadow-custom");
  } else {
    if (scrollPos === 0) {
      header.classList.add("stickyFinish");
      header.classList.remove("shadow-custom");
      header.classList.remove("sticky");
    }
  }
});

/**Efecto de underline para cada link */
window.addEventListener("scroll", function () {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".links");
  let currentSection = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;

    const sectionHeight = section.clientHeight;
    const scrollPos = window.scrollY;

    if (scrollPos >= sectionTop - sectionHeight / 3) {
      if (scrollPos > 2270) {
        currentSection = "services";
      } else {
        currentSection = section.getAttribute("id");
      }
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
});

/**Funcion para cerrar el menu slide */
function closeMenu() {
  btnMenu.checked = false;
}

/**Genera las cards de section 3 */
let projects = [
    {
      title:'Apliocacion de notas',
      
    }
  ];


  function goToPage( url ){
    window.open( url )
  }