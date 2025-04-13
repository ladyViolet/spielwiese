const master = gsap.timeline({paused:true}); //create a paused timeline

master.from('.layers', {
    x: -100,
    duration: 1.5,
    ease: Power4.easeOut,
    stagger:.3
},0)
.from('#back-tree', {
    opacity: 0,
    scale: .1,
    transformOrigin: "bottom center",
    duration: .6,
    ease: "elastic.out(1,0.3)",
},1)
    .from('#front-tree', {
        opacity: 0,
        scale: .1,
        transformOrigin: "bottom center",
        duration: .6,
        ease: "elastic.out(1,0.3)",
},2)
    .from('#text-1', {
        opacity: 0,
        y: -20,
},2)
    .from('#text-2', {
        opacity: 0,
        delay: .5
},2)
    .from('#layer1', {
        display: "none",
        delay: .5,
        scale: .7,
        transformOrigin: "center",
        duration: 2,
        ease: "elastic.out(1,0.3)"
},3)
    .from('#vehicle', {
        display: "none",
        x: -100,
        transformOrigin: "center",
        duration: 2,
        delay: .5,
},4)
    .to('#vehicle', {
        x: 150,
        transformOrigin: "center",
        duration: 5
},7)
    .to('.construction-letter-even', {
        x: 5,
        duration: 9,
        stagger: {
            from: "end",
            amount: .1
          }
},7)
    .to('.construction-letter-odd', {
        x: 15,
        rotation: 100,
        duration: 9,
        stagger: {
            from: "end",
            amount: .1
        }
},7)
    .from('#follow-us', {
        display: "none",
        scale: .7,
        transformOrigin: "center",
        duration: 2,
        ease: "elastic.out(1,0.3)"
},10)
    .from('#instagram-icon', {
        display: "none",
        duration: 2
},11)
    .from('#cursor-pointer', {
        display: "none",
        duration: 2
},12)
    .to('#cursor-pointer', {
        scale: .4,
        transformOrigin: "center",
        repeat: -1,
        yoyo: true
},12);

window.onload = (event) => {
    master.play();
  };