var SCROLL_THRESHOLD = 225;
var SCROLL_THRESHOLD_SUN = 150;

if (window.matchMedia('(max-width: 1000px)').matches) {
    var SCROLL_THRESHOLD = 155;
    var SCROLL_THRESHOLD_SUN = 105;
}
if (window.matchMedia('(max-width: 900px)').matches) {
    var SCROLL_THRESHOLD = 145;
    var SCROLL_THRESHOLD_SUN = 105;
}
if (window.matchMedia('(max-width: 800px)').matches) {
    var SCROLL_THRESHOLD = 125;
    var SCROLL_THRESHOLD_SUN = 105;
}
if (window.matchMedia('(max-width: 700px)').matches) {
    var SCROLL_THRESHOLD = 110;
    var SCROLL_THRESHOLD_SUN = 105;
}
if (window.matchMedia('(max-width: 601px)').matches) {
    var SCROLL_THRESHOLD = 95;
    var SCROLL_THRESHOLD_SUN = 35;
    document.getElementById('Cloud-1').style.width = '20%';
    document.getElementById('Cloud-2').style.width = '30%';
}
if (window.matchMedia('(max-width: 450px)').matches) {
    var SCROLL_THRESHOLD = 0;
    var SCROLL_THRESHOLD_SUN = 0;
}

if (window.matchMedia('(max-width: 400px)').matches) {
    var SCROLL_THRESHOLD_SUN = 8;
    var SCROLL_THRESHOLD = 0;
}


const text = document.getElementById('text');
// const layer1 = document.getElementById('Layer-1');
const layer2 = document.getElementById('Layer-2');
const layer3 = document.getElementById('Layer-3');
const lay3 = document.getElementById('Layer3-2')
const layer4 = document.getElementById('Layer-4');
const sun = document.getElementById('Sun');
const logo = document.getElementById('Logo');


window.addEventListener('scroll', () => {
    let value = window.scrollY;

    if (window.matchMedia('(max-width: 450px)').matches && value > SCROLL_THRESHOLD * 1.5)
    {
        document.getElementById('reg-btn').style.paddingTop = '10%';
        document.getElementById('reg-btn').style.transition = '0.2s ease-in-out';
    }
    else 
    {
    document.getElementById('reg-btn').style.paddingTop = '0%';
    }


    // layer1.style.top = value * -1 + 'px';
    layer4.style.left = -22 + (value * 0.008) + 'vw';
    layer3.style.left = value * -0.25 + 'px';
    lay3.style.left = value * -0.09 + 'px';

    const navbar = document.querySelector('.navi');
    const nav = document.getElementById('navbar')

    if (value > SCROLL_THRESHOLD * 2.6) {
        navbar.classList.add('scrolled');
    }
    else {
        navbar.classList.remove('scrolled');
        logo.style.top = value * 0.155 + 'vh';
        logo.style.scale = 1 + (value * 0.0008);
    }

    if (value > 850)
        nav.classList.add('scrolled');
    else
        nav.classList.remove('scrolled');


    if (value < SCROLL_THRESHOLD_SUN && window.matchMedia('(min-width: 450px)').matches) {
        sun.style.top = value * 1 + 'px';
    }
});

// Set the date we're counting down to
var countDownDate = new Date("Oct 7, 2023 09:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

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
    document.getElementById('day').innerHTML = days;
    document.getElementById('hour').innerHTML = hours;
    document.getElementById('min').innerHTML = minutes;
    document.getElementById('sec').innerHTML = seconds;

    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);


// tracks


"use strict";

function qs(selector, all = false) {
    return all ? document.querySelectorAll(selector) : document.querySelector(selector);
}

const sections = qs('.tracks-section', true);
const timeline = qs('.tracks-timeline');
const line = qs('.tracks-line');
line.style.bottom = `calc(100% - 20px)`;
let prevScrollY = window.scrollY;
let up, down;
let full = false;
let set = 0;
const targetY = window.innerHeight * .8;

function scrollHandler(e) {
    const {
        scrollY
    } = window;
    up = scrollY < prevScrollY;
    down = !up;
    const timelineRect = timeline.getBoundingClientRect();
    const lineRect = line.getBoundingClientRect(); // const lineHeight = lineRect.bottom - lineRect.top;

    const dist = targetY - timelineRect.top;

    if (down && !full) {
        set = Math.max(set, dist);
        line.style.bottom = `calc(100% - ${set}px)`;
    }

    if (dist > timeline.offsetHeight + 50 && !full) {
        full = true;
        line.style.bottom = `-50px`;
    }

    sections.forEach(item => {
        // console.log(item);
        const rect = item.getBoundingClientRect(); //     console.log(rect);

        if (rect.top + item.offsetHeight / 5 < targetY) {
            item.classList.add('show-me');
        }
    }); // console.log(up, down);
    prevScrollY = window.scrollY;
}

scrollHandler();
line.style.display = 'block';
window.addEventListener('scroll', scrollHandler);


var tracks_hover_tracker = document.getElementsByClassName('tracks-section');
var tracks_timeline = document.getElementsByClassName('tracks-line');
for (var i = 0; i < tracks_hover_tracker.length; i++) {
    tracks_hover_tracker[i].addEventListener('mouseover', function () { changetimelinecolor('#ff9a92'); });
    tracks_hover_tracker[i].addEventListener('mouseout', function () { changetimelinecolor('#fff') });
}

function changetimelinecolor(color) {
    tracks_timeline[0].style.backgroundColor = color;
}