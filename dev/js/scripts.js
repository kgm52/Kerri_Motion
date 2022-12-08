import { gsap } from "gsap";

import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";


gsap.registerPlugin(DrawSVGPlugin, GSDevTools, MorphSVGPlugin);

// CustomEase.create("ball-bounce", "M0,0.748 C0.14,0.748 0.188,0.488 0.228,0.248 0.253,0.095 0.282,-0.1 0.3,-0.252 0.344,-0.02 0.312,0.08 0.4,0.56 0.432,0.736 0.564,0.806 0.626,0.554 0.644,0.477 0.668,0.346 0.7,0.198 0.714,0.23 0.738,0.292 0.776,0.292 0.83,0.292 0.842,0.22 0.868,0.168 0.886,0.2 0.902,0.222 0.926,0.222 0.988,0.222 1,0 1,0 ");

gsap.set("#ball", {scale:0});
gsap.set("#colorfill-white", {xPercent:-100, yPercent:-100});
gsap.set("#colorfill-black", {xPercent:-100, yPercent:-100});

function ballAnimation(){
    var tl = gsap.timeline();
    tl.fromTo("#ball", {scale:0}, {duration:3.5, scale:1})
    return tl;
}

function logoAnimation(){
    var tl = gsap.timeline();

    tl.fromTo("#s-white", {x:10, y:80}, {duration:0.35, x:0, y:0})
    tl.fromTo("#i1-white", {y:80, rotate: -30}, {duration:0.4, y:0, rotate:0})
    tl.fromTo("#c-white", {x:-10, y:80, rotate: 180}, {duration:0.6, x:0, y:0, rotate:-180})
    tl.fromTo("#i2-white", {y:0}, {duration:0.75, y:0})
    tl.fromTo("#l-white", {x:-15, y:60}, {duration:0.35, x:0, y:0, rotate:180})
    tl.fromTo("#i3-white", {x:-15, y:80, rotate: -30}, {duration:0.5,x:0,  y:0, rotate:0})
    tl.fromTo("#a-white", {x:-20, y:80, rotate: -30}, {duration:0.55, x:0, y:0, rotate:180})

    tl.fromTo("#n1-white", {x:-15, y:80, rotate: 0}, {duration:0.4, y:80, rotate:180})
    tl.fromTo("#d-white", {y:60, rotate: -30}, {duration:0.3, y:80, rotate:0})
    tl.fromTo("#o-white", {y:60, rotate: -30}, {duration:0.35, y:80, rotate:0})
    tl.fromTo("#n2-white", {y:60, rotate: -30}, {duration:0.3, y:80, rotate:0})
    tl.fromTo("#k-white", {y:60, rotate: -30}, {duration:0.25, y:80, rotate:0})
    tl.fromTo("#e-white", {y:60, rotate: -30}, {duration:0.5, y:80, rotate:0})
    tl.fromTo("#y-white", {y:60, rotate: -30}, {duration:0.25, y:80, rotate:0})

    return tl;
}

function colorfillAnimation(){
    var tl = gsap.timeline();
    tl.fromTo("#colorfill-white", {x:-1000, y:-1000}, {duration:0.7, x:0, y:0})
    tl.fromTo("#colorfill-black", {x:-1000, y:-1000}, {duration:0.7, x:0, y:0})
    tl.fromTo("#colorfill-pink", {x:-1000, y:-1000}, {duration:0.7, x:0, y:0})
    return tl;
}


var mainTL = gsap.timeline();
mainTL.add(ballAnimation())
.add(logoAnimation(), "-=0.75")
.add(colorfillAnimation(), "-=0.25")

GSDevTools.create();