 const menuBtn = document.getElementById('menu-btn');
    const menu = document.getElementById('menu');

    menuBtn.addEventListener('click', () => {
      menu.classList.toggle('show');

      // Toggle button symbol
      if (menu.classList.contains('show')) {
        menuBtn.textContent = '✖'; // Cancel
      } else {
        menuBtn.textContent = '☰'; // Hamburger
      }
    });


   const wrapper = document.querySelector('.slider-wrapper');
const dotsContainer = document.querySelector('.slider-dots');
const cards = document.querySelectorAll('.service-card');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;

// Create dots
cards.forEach((_, index) => {
  const dot = document.createElement('span');
  if (index === 0) dot.classList.add('active');
  dot.addEventListener('click', () => goToSlide(index));
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.slider-dots span');

function updateDots() {
  dots.forEach(dot => dot.classList.remove('active'));
  dots[currentIndex].classList.add('active');
}

function goToSlide(index) {
  currentIndex = index;
  wrapper.style.transform = `translateX(-${index * 100}%)`;
  updateDots();
}

// Next / Prev buttons (desktop only)
nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % cards.length;
  goToSlide(currentIndex);
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + cards.length) % cards.length;
  goToSlide(currentIndex);
});

// Swipe (mobile)
let startX;
wrapper.addEventListener('touchstart', (e) => startX = e.touches[0].clientX);
wrapper.addEventListener('touchend', (e) => {
  let endX = e.changedTouches[0].clientX;
  if (startX - endX > 50) nextBtn.click(); // swipe left
  if (endX - startX > 50) prevBtn.click(); // swipe right
});
