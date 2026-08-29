// Main JS: GSAP Scroll-driven 3D illusion
gsap.registerPlugin(ScrollTrigger);

const bottle = document.getElementById('bottle');
const box = document.getElementById('box');
const logo = document.getElementById('logo');
const scene = document.getElementById('scene');

// Smooth parallax mouse effect
let mouseX = 0, mouseY = 0;
document.addEventListener('mousemove', (e)=>{
  const rect = scene.getBoundingClientRect();
  mouseX = (e.clientX - rect.left) / rect.width - 0.5;
  mouseY = (e.clientY - rect.top) / rect.height - 0.5;
});

function animateMouse(){
  gsap.to(scene, { 
    duration: 1.4, 
    css: {},
    onUpdate() {
      const rx = mouseY * 6; // rotate x small
      const ry = mouseX * 10; // rotate y small
      gsap.set(bottle, { rotationX: rx, rotationY: ry });
      gsap.set(box, { rotationX: rx*0.5, rotationY: ry*0.6 });
      gsap.set(logo, { rotationY: ry*0.8, rotationX: rx*0.6 });
    }
  });
}

setInterval(animateMouse, 1200);

// Scroll-driven timeline (pin hero and animate scene)
ScrollTrigger.create({
  trigger: '#hero',
  start: 'top top',
  end: '+=2000',
  pin: true,
  scrub: 0.7,
  onUpdate(self){ /* optional debug */ }
});

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: '#hero',
    start: 'top top',
    end: '+=2000',
    scrub: 0.7
  }
});

// Stage 1: reveal
tl.fromTo(bottle, { z: 0, scale: 0.85, rotationY: 35, xPercent: -70, yPercent: -50 }, { z: 200, scale: 1.05, rotationY: -10, xPercent: -55, yPercent: -50, ease: 'power2.inOut', duration: 1.8 }, 0);
// box floats and rotates
tl.fromTo(box, { z: -200, scale: 0.8, rotationY: 30, xPercent: 10, yPercent: -10 }, { z: 120, scale: 1.02, rotationY: 0, xPercent: -10, yPercent: -50, ease: 'power2.inOut', duration: 1.8 }, 0.2);
// logo subtle pop
tl.fromTo(logo, { scale: 0.8, rotationY: -40, yPercent: -20 }, { scale: 1.05, rotationY: 0, yPercent: -50, ease: 'elastic.out(1,0.6)', duration: 1.6 }, 0.5);

// highlight sweep
tl.to('#light', { opacity: 1, duration: 1.2 }, 0.6);

// later stage: spin and exit
tl.to(bottle, { rotationY: 360, z: 0, xPercent: -20, scale: 0.9, duration: 1.6, ease: 'power3.inOut' }, 1.4);
// box falls back
tl.to(box, { rotationX: 20, rotationY: 80, z: -400, scale: 0.7, xPercent: 40, yPercent: -10, duration: 1.6, ease: 'power3.in' }, 1.8);

// small parallax on stage section
gsap.to('#stage .stage-inner', { yPercent: 10, ease: 'none', scrollTrigger: { trigger: '#stage', start: 'top bottom', end: 'bottom top', scrub: true }});

// Accessibility: reduce motion
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if(prefersReduced){
  ScrollTrigger.getAll().forEach(st => st.disable());
}

// Resize handler to keep transforms consistent
window.addEventListener('resize', ()=>{
  ScrollTrigger.refresh();
});
