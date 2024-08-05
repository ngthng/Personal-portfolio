const slideContainer = document.querySelector('.container');
const slide = document.querySelector('.slides');
const nextBtn = document.getElementById('#btn-next');
const prevBtn = document.getElementById('#btn-prev');
const interval = 1000;

let slides = document.querySelectorAll('.slide');
let index = 1;
let slideId;

const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true); 

firstClone.id = 'first-clone';
lastClone.id = 'last-clone';

slide.append(firstClone);
slide.prepend(lastClone);

console.log(slide);

const slideWidth = slides[index].clientWidth;
slide.style.transform = `translateX(${-slideWidth * index}px)`;

function moveToNextSlide() {
  slides = document.querySelectorAll('.slide');
  if (index >= slides.length -1 ){return;}
  index++;
  slide.style.transform = `translateX(${-slideWidth * index}px)`;
  slide.style.transition = `0.9s`;
}

function startSlide() {
  slideId = setInterval(() => {
    moveToNextSlide();
  }, interval);
}

slide.addEventListener('transitionend', () => {
  slides = document.querySelectorAll('.slide');
  if (slides[index].id === firstClone.id) {
    slide.style.transition = `none`;
    index = 1;
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
  }
});

slide.addEventListener('mouseenter', () => {
  clearInterval(slideId);
});

slideContainer.addEventListener('mouseleave', () => {
  startSlide();
})

startSlide();