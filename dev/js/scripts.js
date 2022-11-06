import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(DrawSVGPlugin, GSDevTools);




function simpleAnimation(){
    var tl = gsap.timeline();
    tl.to("#line", {duration:1, drawSVG:"true"})
    .to("#small-circle", {duration:1, scale:2, x:350})
    .to("#large-circle", {duration:1, scale:0.5, x:-350}, "<");
    return tl;
}


function patternAnimation(){
    var tl = gsap.timeline();
    tl.from(".square",{duration:1, drawSVG:0, stagger:0.25, transformOrigin:"center"},"playPattern");
    return tl;
}


function toggleAnimation(){
    var tl = gsap.timeline();
    tl.to("#happy-face", {duration:1, x:-100});
    return tl;
}

var mainTl = gsap.timeline();
mainTl.add(simpleAnimation())
.add(patternAnimation())
.add(toggleAnimation());