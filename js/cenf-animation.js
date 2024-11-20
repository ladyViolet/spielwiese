const master = gsap.timeline({paused:true}); //create a paused timeline

master.to('#start-container', {
    opacity: 0
})
master.from('.layers', {
    x: -100,
    duration: 2,
    ease: Power4.easeOut,
    stagger:.3
})
.from('#back-tree', {
    opacity: 0,
    scale: .1,
    transformOrigin: "bottom center",
    duration: .8,
    ease: "elastic.out(1,0.3)",
})
    .from('#front-tree', {
        opacity: 0,
        scale: .1,
        transformOrigin: "bottom center",
        duration: .8,
        ease: "elastic.out(1,0.3)",
})
    .from('#text-1', {
        opacity: 0,
        y: -20,
})
    .from('#text-2', {
        opacity: 0,
        delay: .5
})
master.to('#end-container', {
    display: "block",
    delay: 3
});

const button = document.getElementById("play-animation");
button.addEventListener("click", () => {
    master.play();
});