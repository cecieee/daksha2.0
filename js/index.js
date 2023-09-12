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
    layer4.style.top = value * -0.5 + 'px';
    layer3.style.top = value * -0.25 + 'px';


    if (value < SCROLL_THRESHOLD) {
      sun.style.top = value * 1 + 'px';
    }
  });

