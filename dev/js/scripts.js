import { gsap } from "gsap";

import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin, GSDevTools, MorphSVGPlugin);

function busAnimation(){
    var tl = gsap.timeline();
    tl.from("#bus, #surfboard", {duration:2.5, ease: "power4.out", x:-1205, y:0, rotate:-15, smoothOrigin:true})
    .to("#wheel1", {duration:2.2, rotation:1080, transformOrigin: "50% 50%"}, "<")
    .to("#wheel2", {duration:2.2, rotation:1080, transformOrigin: "50% 50%"}, "<")
    .to("#bus", {duration:1.25, ease: "power4.out", transformOrigin: "right bottom", rotate:5, smoothOrigin:true}, "-=1")
    .to("#surfboard", {duration:1.25, ease: "power4.out", transformOrigin: "right bottom", rotate:5, smoothOrigin:true}, "<")
    .to("#bus", {duration:0.55, ease: "power2.in", transformOrigin: "right bottom", rotate:0, smoothOrigin:true}, "-=0.5")
    .to("#surfboard", {duration:0.55, ease: "power2.out", transformOrigin: "right bottom", rotate:0, smoothOrigin:true})
    
    return tl;
}

function logoAnimation(){
    var tl = gsap.timeline();
    tl.from("#jon", {duration:1.5, x: -1200, ease: "power4.out"})
    .from("#ron", {duration:1.5, x: -1200, ease: "power4.out"}, "-=0.5")
    return tl;
}

function textAnimation(){
    var tl = gsap.timeline();
    tl.from("#small-text", {duration:.5, scale:0})
    return tl;
}


var mainTL = gsap.timeline();
mainTL.add(busAnimation())
.add(logoAnimation(), "-=1")
.add(textAnimation(), "-=0.1")

GSDevTools.create();