import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


function photoAnimation(){
    var tl =gsap.timeline();
    tl.from("#photo1", {
        duration: 1,
        x: 400,
        scrollTrigger: { 
            trigger: "#photo1",
            scrub: 0.7,
            toggleActions:"play, pause, pause, restart",
            markers:false,
            start: "top, 70%",
            end: "top, top"
        }
    })
    .from("#photo2", {
        duration: 1,
        x: -400,
        scrollTrigger: { 
            trigger: "#photo2",
            scrub: 0.7,
            toggleActions:"play, pause, pause, restart",
            markers:false,
            start: "top, 70%",
            end: "top, top"
        }
    })
    .to("#square1, #square2, #square3, #triangle1, #triangle2, #circle1, #circle2, #circle3", {
        duration: 1,
        y: 480,
        rotate: 540,
        stagger: .1,
        scrollTrigger: { 
            trigger: "#square1, #square2, #square3, #triangle1, #triangle2, #circle1, #circle2, #circle3",
            scrub: true,
            toggleActions:"play, play, none, none",
            markers:false,
            start: "top, 50%"
        }
    })
    .from("#photo3", {
        duration: 1,
        x: -400,
        scrollTrigger: { 
            trigger: "#photo3",
            scrub: 0.7,
            toggleActions:"play, pause, pause, restart",
            markers:false,
            start: "top, 70%",
            end: "top, top"
        }
    })
    .from("#photo4", {
        duration: 1,
        x: 400,
        scrollTrigger: { 
            trigger: "#photo4",
            scrub: 0.7,
            toggleActions:"play, pause, pause, restart",
            markers:false,
            start: "top, 70%",
            end: "top, top"
        }
    });

    return tl;
}

var mainTL = gsap.timeline();
mainTL.add(photoAnimation());