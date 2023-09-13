
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


var tracks_hover_tracker=document.getElementsByClassName('tracks-section');
var tracks_timeline=document.getElementsByClassName('tracks-line');
console.log(tracks_hover_tracker);
for (var i=0; i<tracks_hover_tracker.length;i++) {
  tracks_hover_tracker[i].addEventListener('mouseover',function(){changetimelinecolor('#ff9a92');});
  tracks_hover_tracker[i].addEventListener('mouseout',function(){changetimelinecolor('#fff')});
}

function changetimelinecolor(color){
  tracks_timeline[0].style.backgroundColor = color;
}