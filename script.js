(function () {
  // Declare rate and adjustJank variables
  let rate = 40;
  let adjustJank = 4;

  // Select all p elements within a container element
  let containerPs = $(".text-jumbo-bottom h3");

  // Loop through each p element
  containerPs.each(function () {
    let obj = $(this);

    // Get the width of the current p element
    let distance = obj.width();

    // Clone the current p element and append it to the parent element
    obj.clone().appendTo(obj.parent());

    // Set the parent element's width to the width of the p element
    obj.parent().parent().width(distance);

    // Calculate the time needed to travel the distance at the given rate
    let time = distance / rate;

    // Use TweenMax to animate the parent element of the current p element
    // over the calculated time
    // The animation will repeat indefinitely
    TweenMax.to(obj.parent(), time, {
      x: "-" + (distance + adjustJank),
      ease: Linear.easeNone,
      repeat: -1,
    });
  });
})();

const jumbotext = document.querySelector(".text-jumbo");
const circle = document.querySelector(".jumbo .circle");
// const incircle = document.querySelector(".jumbo .inner-circle")
// const jumboImg = document.querySelector(".jumbo img")
const jumboImg2 = document.querySelector(".jumbo img:nth-child(1)");
const jumboImg3 = document.querySelector(".jumbo img:nth-child(2)");
// const aboutImage = document.querySelector(".image-about img");
const aboutImg = document.querySelector(".image-about");
const skill = document.querySelector(".skill");
const lineSkill = document.querySelector(".skill-child .title-skill span");
const skillBack = document.querySelector(".skill-back");
const aboutText = document.querySelector(".about .magnetic");

window.onscroll = () => {
  let scroll = window.scrollY;

  // circle.style.transform = `scale(${scroll/50})`
  // incircle.style.transform = `scale(${scroll/50})`
  jumbotext.style.left = `${scroll / -6}px`;
  jumbotext.style.transform = `translateY(${scroll / 2.6}px)`;
  // jumboImg.style.top = `${scroll/4}px`
  // jumboImg.style.transform = `translateX(${scroll/10}px)`
  jumboImg2.style.top = `${scroll / 4}px`;
  jumboImg2.style.transform = `translateX(${scroll / 12}px)`;
  jumboImg3.style.top = `${scroll / 4}px`;
  jumboImg3.style.transform = `translateX(${scroll / 8}px)`;
  aboutImg.style.left = `${scroll / 30}px`;
  aboutImg.style.top = `${scroll / 30}px`;
  // aboutImage.style.transform = `translateY(${scroll / 11.5}px)`;
  lineSkill.style.width = `${scroll / 2}px`;
  skillBack.style.bottom = `${scroll / 20}px`;
  skillBack.style.left = `${scroll / 20}px`;
  aboutText.style.bottom = `${scroll/15}px`
  aboutText.style.right = `${scroll/5}px`
};

var magnets = document.querySelectorAll(".magnetic");
var strength = 200;

magnets.forEach((magnet) => {
  magnet.addEventListener("mousemove", moveMagnet);
  magnet.addEventListener("mouseout", function (event) {
    TweenMax.to(event.currentTarget, 1, { x: 0, y: 0, ease: Power4.easeOut });
  });
});

function moveMagnet(event) {
  var magnetButton = event.currentTarget;
  var bounding = magnetButton.getBoundingClientRect();

  //console.log(magnetButton, bounding)

  TweenMax.to(magnetButton, 1, {
    x: ((event.clientX - bounding.left) / magnetButton.offsetWidth - 0.5) * strength,
    y: ((event.clientY - bounding.top) / magnetButton.offsetHeight - 0.5) * strength,
    ease: Power4.easeOut,
  });
}

// Lennis scroll
const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// Swiper Slide
var swiper = new Swiper(".swipe-cont", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button",
  },
});
