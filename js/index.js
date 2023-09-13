var SCROLL_THRESHOLD = 200;

if (window.matchMedia('(max-width: 900px)').matches) {
  var SCROLL_THRESHOLD = 150;
}
if (window.matchMedia('(max-width: 601px)').matches) {
  var SCROLL_THRESHOLD = 115;
}
if (window.matchMedia('(max-width: 450px)').matches) {
  var SCROLL_THRESHOLD = 80;
}


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

    if(value > SCROLL_THRESHOLD *2.6) {
      navbar.classList.add('scrolled');
    }
    else {
      navbar.classList.remove('scrolled');
      logo.style.top = value * 1 + 'px';
      logo.style.scale = 1 + (value * 0.0012);
    }

    if(value > 850)
    nav.classList.add('scrolled');
    else
    nav.classList.remove('scrolled');
    

    if (value < SCROLL_THRESHOLD) {
      sun.style.top = value * 1 + 'px';
    }
});

// Set the date we're counting down to
var countDownDate = new Date("Dec 2, 2023 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById('day').innerHTML =days;
  document.getElementById('hour').innerHTML =hours;
  document.getElementById('min').innerHTML =minutes;
  document.getElementById('sec').innerHTML =seconds;
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
