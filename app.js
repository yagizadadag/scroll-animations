// NAVBAR COLOR CHANGE

const navLinks = document.querySelectorAll('.nav-link');
const logo = document.querySelector('.logo');
function changeStyle(a,b) {
    a.forEach(function (element) {
      element.style.color = "#CCFF00";
    })
    b.style.color = "#F9F5EB";
  }

  function normalStyle(a,b) {
    a.forEach(function (element) {
      element.style.color = "#F9F5EB";
    })
    b.style.color = "#F9F5EB";
  }
window.onscroll = function (){
    var vh = window.innerHeight;
    if(document.body.scrollTop >= 90*vh/100 || document.documentElement.scrollTop >= 90*vh/100){
        changeStyle(navLinks , logo);
    }else{
        normalStyle(navLinks , logo);
    }
    
};

// SCROLL ANIMATION 

let header = document.querySelector('.header-content');
let contentLogo = document.querySelector('.header-content .fa-brands');

window.addEventListener('scroll' , function() {
  var value = window.scrollY;

  header.style.marginTop = value * 0.1 + 'rem';

  if(value >= 60){
    contentLogo.style.color = "#CCFF00";
    contentLogo.style.borderColor = "#CCFF00";
    contentLogo.style.fontSize = "4rem";
    contentLogo.style.padding = "10rem";
    contentLogo.style.borderRadius = "50%"
  }
  else {
    contentLogo.style.color = "#F9F5EB";
    contentLogo.style.borderColor = "#CCFF00";
    contentLogo.style.fontSize = "10rem";
    contentLogo.style.padding = "4rem";
    contentLogo.style.borderRadius = "5%"
  }
})

// SLIDER

const leftArrow = document.getElementById('leftArrow');
const rightArrow = document.getElementById('rightArrow');
const textDiv = document.querySelector(".slider-texts");
let index = 0;
let mediaQuery = window.matchMedia("(max-width:1120px)");

const texts =  [
  "Lorem ipsum dolor, sit amet consectetur adipisicing." ,
  "Lorem ipsum dolor, sit amet consectetur adipisicing. Lorem ipsum dolor sit amet." ,
  "Lorem ipsum dolor, sit amet consectetur adipisicing. Lorem, ipsum dolor."
]

function incFontSize(){
  textDiv.style.fontSize = "2.5rem";
  textDiv.style.color = "#E7F6F2";
}

function decFontSize(){
  if(mediaQuery.matches){
    textDiv.style.fontSize = "1.5rem";
  }
  else {
    incFontSize();
  }
}

function slideRight() {
  if (index == texts.length-1) 
    index = 0;
  else
    index++;
    gsap.to(".slider-images", .3, {y: `${index*-100}%`});
    textDiv.textContent = texts[index];
    gsap.from(textDiv, .5, {y: 20, opacity :0, ease: "power3.out"});
}

function slideLeft() {
  if(index == 0)
    index = texts.length-1;
  else
    index--;
    gsap.to(".slider-images", .3, {y: `${index*-100}%`});
    textDiv.textContent = texts[index];
    gsap.from(textDiv, .5, {y: -20, opacity :0, ease: "power3.out"});
}


rightArrow.addEventListener("click", slideRight);
leftArrow.addEventListener("click" , slideLeft);
incFontSize();
window.addEventListener("resize", decFontSize);

// OPENING ANIMATION 

TweenMax.fromTo('.header-content i' , 1.2 , {y:180 , opacity:0},{y:0 , opacity:1});
TweenMax.fromTo('.header-content h1' , 1.2 , {y:-80 , opacity:0},{y:0 , opacity:1});
TweenMax.fromTo('.nav-link' , 1.2 , {x:-100 , opacity:0},{x:0 , opacity:1});