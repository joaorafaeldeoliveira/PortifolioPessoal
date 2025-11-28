const lenis = new Lenis({
    duration: 1.2, 
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
    direction: 'vertical', 
    gestureDirection: 'vertical', 
    smooth: true,
    mouseMultiplier: 0.5, 
    smoothTouch: false, 
    touchMultiplier: 2,
    infinite: false,
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

lenis.on('scroll', ScrollTrigger.update);


gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});
const faixaText = document.querySelector('.faixa p');

gsap.to(faixaText, {
    x: '-100%', 
    duration: 10,
    ease: 'none', 
    repeat: -1, 
    modifiers: {
        x: (x) => parseFloat(x) % faixaText.offsetWidth + 'px' 
    }
});


gsap.registerPlugin(ScrollTrigger);


gsap.from(".about-me-tittle", {
    y: 50, 
    opacity: 0, 
    duration: 1.5,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".about-me-tittle",
        start: "top 80%",
        toggleActions: "play none none none"
    }
});
gsap.from(".photo", {
    x: -50, 
    opacity: 0, 
    duration: 1.5,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".photo",
        start: "top 80%",
        toggleActions: "play none none none"
    }
});
gsap.from(".skills-tittle", {
    y: 50, 
    opacity: 0, 
    duration: 1.5,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".skills-tittle",
        start: "top 80%",
        toggleActions: "play none none none"
    }
});

gsap.from(".skills-item", {
    opacity: 0,
    y: 30,
    duration: 0.8,
    stagger: 0.2, 
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".skills-area",
        start: "top 75%",
        toggleActions: "play none none none"
    }
});


const sections = gsap.utils.toArray("section");

ScrollTrigger.create({
    trigger: "body", 
    start: "top top", 
    end: "bottom bottom", 
    snap: {
        snapTo: sections, 
        duration: {min: 0.5, max: 1.0}, 
        delay: 0.05, 
        ease: "power2.inOut", 
    }
});
