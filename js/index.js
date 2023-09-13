const SCROLL_THRESHOLD = 120;

const text = document.getElementById('text');
const layer1 = document.getElementById('Layer-1');
const layer2 = document.getElementById('Layer-2');
const layer3 = document.getElementById('Layer-3');
const layer4 = document.getElementById('Layer-4');
const sun = document.getElementById('Sun');
const logo = document.getElementById('Logo');


window.addEventListener('scroll', () => {
  let value = window.scrollY;
  layer1.style.top = value * -1 + 'px';
  layer4.style.right = value * -0.25 + 'px';
  layer3.style.left = value * -0.25 + 'px';

  const navbar = document.querySelector('.navi');
  const nav = document.getElementById('navbar')

    if(value > 500) {
      navbar.classList.add('scrolled');
      logo.style.zIndex = '-1';
    }
    else {
      navbar.classList.remove('scrolled');
      logo.style.position = 'fixed';
      logo.style.zIndex = '1';
    }

    if(value > 850)
    nav.classList.add('scrolled');
    else
    nav.classList.remove('scrolled');


    if(value > 200) {
      layer2.style.zIndex = '2';
    }

  if (value < SCROLL_THRESHOLD) {
    sun.style.top = value * 1 + 'px';
  }
});

