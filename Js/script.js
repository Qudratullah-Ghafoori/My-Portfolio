const homeSection = document.querySelector(".home");
const aboutSection = document.querySelector(".about");
const servicesSection = document.querySelector(".services");
const portfolioSection = document.querySelector(".portfolio");
const contactSection = document.querySelector(".contact");

const navHome = document.getElementById("navHome");
const navAbout = document.getElementById("navAbout");
const navService = document.getElementById("navService");
const navPortfolio = document.getElementById("navPortfolio");
const navContact = document.getElementById("navContact");

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom > 0;
}

window.onscroll = () => {
  if (isInViewport(homeSection)) {
    navHome.classList.add("active");
    navAbout.classList.remove("active");
    navService.classList.remove("active");
    navPortfolio.classList.remove("active");
    navContact.classList.remove("active");
  } else if (isInViewport(aboutSection)) {
    navHome.classList.remove("active");
    navAbout.classList.add("active");
    navService.classList.remove("active");
    navPortfolio.classList.remove("active");
    navContact.classList.remove("active");
  } else if (isInViewport(servicesSection)) {
    navHome.classList.remove("active");
    navAbout.classList.remove("active");
    navService.classList.add("active");
    navPortfolio.classList.remove("active");
    navContact.classList.remove("active");
  } else if (isInViewport(portfolioSection)) {
    navHome.classList.remove("active");
    navAbout.classList.remove("active");
    navService.classList.remove("active");
    navPortfolio.classList.add("active");
    navContact.classList.remove("active");
  } else if (isInViewport(contactSection)) {
    navHome.classList.remove("active");
    navAbout.classList.remove("active");
    navService.classList.remove("active");
    navPortfolio.classList.remove("active");
    navContact.classList.add("active");
  } else {
    navHome.classList.add("active");
    navAbout.classList.remove("active");
    navService.classList.remove("active");
    navPortfolio.classList.remove("active");
    navContact.classList.remove("active");
  }
};
/*====================================typing animation==================================*/
var typed = new Typed(".typing",{
  strings:["","Web Developer","Web Designer","Graphic Designer","YouTuber"],
  typeSpeed:100,
  backSpeede:60,
  loop:true
})