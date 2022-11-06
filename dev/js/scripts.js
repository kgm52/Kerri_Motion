import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(DrawSVGPlugin, GSDevTools);


gsap.to("#line", {duration:1, drawSVG:"true"});


// gsap.to("#small-circle", {duration:1, scale:2, x:350});
// gsap.to("#large-circle", {duration:1, scale:0.5, x:-350});


// gsap.from(".square",{duration:0.5, drawSVG:0, stagger:0.25, transformOrigin:"center"},"playPattern")


// function toggleAnimation(){
//     var tl = gsap.timeline();
//     tl.to("#happy-face", {duration:1, x:-100});
//     return tl;
// }

// var mainTl = gsap.timeline();
// mainTl.add(toggleAnimation());