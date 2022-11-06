import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(DrawSVGPlugin, GSDevTools);




function simpleAnimation(){
    var tl = gsap.timeline();
    tl.from("#line", {duration:1, drawSVG:"50% 50%"})
    .to("#small-circle", {duration:2, scale:2, x:350})
    .to("#large-circle", {duration:1, scale:0.5, x:-350}, "-=1");
    return tl;
}


function patternAnimation(){
    var tl = gsap.timeline();
    tl.from(".square",{duration:1, drawSVG:0, stagger:0.05, transformOrigin:"center"},"playPattern")
    .to(".even", {duration:1, fill:"#000"});
    return tl;
}


// function toggleAnimation(){
//     var tl = gsap.timeline();
//     tl.to("#happy-face", {duration:1, x:-100});
//     return tl;
// }

var mainTl = gsap.timeline();
mainTl.add(simpleAnimation())
.add(patternAnimation())
// .add(toggleAnimation());