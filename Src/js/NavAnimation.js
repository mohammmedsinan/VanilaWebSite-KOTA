const timeline = gsap.timeline({ defaults: { duration: 0.003 } });
const timeline2 = gsap.timeline({ defaults: { duration: 0.08 } });
const humberger = document.querySelectorAll('.humberger-element ');
let BooleanHandler = true;
let AnimationExpation = false;
//function Handling the logic ------------->
//if BoleanHandler true
function BoleanHandlerTrue() {
  timeline.to('.he1', { y: '1.3vh' });
  timeline.to('.he3', { y: '-1.3vh' });
  timeline.to('.he3', { opacity: '0' });
  timeline.to('.nav-hider', { opacity: '0' });
  timeline.to('.nav-hider', { pointerEvents: 'none' });
  timeline.to('.logo-hider', { opacity: '1' });
  timeline.to('.nav-view', { y: '0%', duration: 0.5 });
  timeline.to('.he1', {
    rotation: '42',
    transformOrigin: 'center',
    height: '5.5px',
  });
  timeline.to('.he2', {
    rotation: '-42',
    transformOrigin: 'center',
    height: '5.5px',
  });
  timeline.to('.list-class-1', { opacity: 1, pointerEvents: 'auto', y: '0vh', duration: 0.2 });
  timeline.to('.list-class-2', { opacity: 1, pointerEvents: 'auto', y: '0vh', duration: 0.2 });
  timeline.to('.list-class-3', { opacity: 1, pointerEvents: 'auto', y: '0vh', duration: 0.2 });
  timeline.to('.list-class-4', { opacity: 1, pointerEvents: 'auto', y: '0vh', duration: 0.2 });
  timeline.to('.list-class-5', { opacity: 1, pointerEvents: 'auto', y: '0vh', duration: 0.2 });

  setTimeout(() => {
    humberger.forEach((e) => {
      e.style.backgroundColor = 'white';
    });
  }, 100);
}
function BoleanHandlerFalse() {
  humberger.forEach((e) => {
    e.style.backgroundColor = '#878787';
  });
  timeline.to('.list-class-1', { opacity: 1, pointerEvents: 'auto', y: '-200vh', duration: 0.08 });
  timeline.to('.list-class-2', { opacity: 1, pointerEvents: 'auto', y: '-200vh', duration: 0.08 });
  timeline.to('.list-class-3', { opacity: 1, pointerEvents: 'auto', y: '-200vh', duration: 0.08 });
  timeline.to('.list-class-4', { opacity: 1, pointerEvents: 'auto', y: '-200vh', duration: 0.08 });
  timeline.to('.list-class-5', { opacity: 1, pointerEvents: 'auto', y: '-200vh', duration: 0.08 });
  timeline.to('.nav-hider', { pointerEvents: 'auto' });
  timeline.to('.he1', { rotation: '0', transformOrigin: 'center', height: '4px' });
  timeline.to('.he2', { rotation: '0', transformOrigin: 'center', height: '4px' });
  timeline.to('.he3', { opacity: '1' });
  timeline.to('.he1', { y: '0vh' });
  timeline.to('.he3', { y: '0vh' });
  timeline.to('.main-cover', { display: 'block' });
  timeline.to('.logo-hider', { opacity: '0' });
  timeline.to('.nav-hider', { opacity: '1' });
  timeline.to('.nav-view', { y: '-100%', duration: 0.5 });
}
//Main Navigation humbrger Slide
function navigationSliders() {
  const navExp = document.querySelector('.nav-exption');
  const selectorNav = document.querySelector('.selectorNav');
  const notSelectorNav = document.querySelectorAll('.notSelectorNav');
  navExp.addEventListener('click', () => {
    if (BooleanHandler == true) {
      BoleanHandlerTrue();
    } else {
      BoleanHandlerFalse();
    }
    BooleanHandler = !BooleanHandler;
  });
  selectorNav.addEventListener('mouseover', () => {
    if (AnimationExpation === false) {
      AnimationExpation = true;
      console.log('true');
    }
    if (AnimationExpation) {
      timeline2.to('.class-list1', { opacity: 1, y: '0vh' }),
        timeline2.to('.class-list2', { opacity: 1, y: '0vh' }),
        timeline2.to('.class-list3', { opacity: 1, y: '0vh' }),
        timeline2.to('.class-list4', { opacity: 1, y: '0vh' }),
        timeline2.to('.class-list5', { opacity: 1, y: '0vh' });
    }
  });
  notSelectorNav.forEach((e) => {
    e.addEventListener('mouseover', () => {
      if (AnimationExpation === true) {
        AnimationExpation = false;
        console.log('false');
        timeline2.to('.class-list1', { opacity: 0, y: '-30vh' }),
          timeline2.to('.class-list2', { opacity: 0, y: '-30vh' }),
          timeline2.to('.class-list3', { opacity: 0, y: '-30vh' }),
          timeline2.to('.class-list4', { opacity: 0, y: '-30vh' }),
          timeline2.to('.class-list5', { opacity: 0, y: '-30vh' });
      }
    });
  });
}
navigationSliders();
