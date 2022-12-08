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
    tl.fromTo("#ball", {scale:0}, {ease: "power2.inOut", duration:1, scale:1, transformOrigin: "center", x:0, y:-80})
    .fromTo("#ball", {scaleY:1}, {ease: "power2.inOut", duration:0.5, scaleY:1.5, transformOrigin: "center", x:0, y:0})
    .fromTo("#ball", {scaleY:1.5}, {ease: "power2.inOut", duration:0.25, scaleY:0.5, transformOrigin: "center bottom"})
    .fromTo("#ball", {scaleY:0.5}, {ease: "power2.inOut", duration:0.5, scaleY:1.5, transformOrigin: "center bottom", x:0, y:-80})
    .fromTo("#ball", {scaleY:1.5}, {ease: "power2.inOut", duration:0.25, scaleY:0.5, transformOrigin: "center bottom", x:0, y:-20})
    .fromTo("#ball", {scaleY:0.5}, {ease: "power2.inOut", duration:0.25, scaleY:1.5, transformOrigin: "center bottom", x:25, y:-50})
    .fromTo("#ball", {scaleY:1.5}, {ease: "power2.inOut", duration:0.25, scaleY:0.5, transformOrigin: "center bottom", x:50, y:-25})
    .fromTo("#ball", {scaleY:0.5}, {ease: "power2.inOut", duration:0.25, scaleY:1, transformOrigin: "center bottom", x:75, y:-30})
    .fromTo("#ball", {scaleY:1}, {ease: "power2.inOut", duration:0.25, scaleY:0.5, transformOrigin: "center bottom", x:107, y:5})
    .fromTo("#ball", {scaleY:0.5}, {ease: "power2.inOut", duration:0.25, scaleY:0.5, scaleX:0.1, transformOrigin: "center bottom"})
    .from("#ball", {duration: 0.1, drawSVG: "0%"})

    return tl;
}

function logoAnimation(){
    var tl = gsap.timeline();

    tl.fromTo("#logo-white", {opacity:0}, {duration:0.1, opacity:1})
    .fromTo("#s-white", {x:10, y:-80}, {duration:0.35, x:0, y:0, drawSVG: "100%"})
    .fromTo("#i1-white", {y:-80, rotate: -30}, {duration:0.4, y:0, rotate:0, drawSVG: "100%"}, "<")
    .fromTo("#c-white", {x:-10, y:-80, rotate: 0}, {duration:0.6, x:0, y:0, rotate:-180, drawSVG: "100%"}, "<")
    .fromTo("#i2-white", {y:0}, {duration:0.75, y:0, drawSVG: "100%"}, "<")
    .fromTo("#l-white", {x:-15, y:-60, rotate: 0}, {duration:0.35, x:0, y:0, rotate:180, drawSVG: "100%"}, "<")
    .fromTo("#i3-white", {x:-15, y:-80, rotate: -30}, {duration:0.5,x:0,  y:0, rotate:0, drawSVG: "100%"}, "<")
    .fromTo("#a-white", {x:-20, y:-80, rotate: 0}, {duration:0.55, x:0, y:0, rotate:180, drawSVG: "100%"}, "<")
    .fromTo("#n1-white", {x:-15, y:-80, rotate: 0}, {duration:0.4, x:0, y:80, rotate:-180, drawSVG: "100%"}, "<")
    .fromTo("#d-white", {x:10, y:-60, rotate: 30}, {duration:0.3, x:0, y:0, rotate:0, drawSVG: "100%"}, "<")
    .fromTo("#o-white", {x:10, y:10, rotate: -30}, {duration:0.35, x:0, y:0, rotate:0, drawSVG: "100%"}, "<")
    .fromTo("#n2-white", {y:60, rotate: 0}, {duration:0.3, y:0, rotate:180, drawSVG: "100%"}, "<")
    .fromTo("#k-white", {x:10, y:-10, rotate: 20}, {duration:0.25, x:0, y:0, rotate:0, drawSVG: "100%"}, "<")
    .fromTo("#e-white", {x:-60, y:-60, rotate: -45}, {duration:0.5, x:0, y:0, rotate:0, drawSVG: "100%"}, "<")
    .fromTo("#y-white", {x:-40, y:-40, rotate: -30}, {duration:0.25, x:0, y:0, rotate:0, drawSVG: "100%"}, "<")

    .fromTo("#logo-black", {opacity:0}, {duration:0.1, opacity:1}, "<")
    .fromTo("#s-black", {x:5, y:-40}, {duration:0.35, x:0, y:0}, "<")
    .fromTo("#i1-black", {x:0, y:-40, rotate: -30}, {duration:0.4, x:0, y:0, rotate:0}, "<")
    .fromTo("#c-black", {x:-5, y:-40, rotate: 0}, {duration:0.6, x:0, y:0, rotate:0}, "<")
    .fromTo("#i2-black", {x:0, y:0}, {duration:0.75, x:0, y:0}, "<")
    .fromTo("#l-black", {x:-10, y:-30, rotate: 0}, {duration:0.35, x:0, y:0, rotate:0}, "<")
    .fromTo("#i3-black", {x:-15, y:-40, rotate: -30}, {duration:0.5,x:0,  y:0, rotate:0}, "<")
    .fromTo("#a-black", {x:-10, y:-40, rotate: 0}, {duration:0.55, x:0, y:0, rotate:0}, "<")
    .fromTo("#n1-black", {x:-10, y:-40, rotate: 0}, {duration:0.4, x:0, y:80, rotate:-0}, "<")
    .fromTo("#d-black", {x:5, y:-30, rotate: 30}, {duration:0.3, x:0, y:0, rotate:0}, "<")
    .fromTo("#o-black", {x:5, y:15, rotate: -30}, {duration:0.35, x:0, y:0, rotate:0}, "<")
    .fromTo("#n2-black", {x:0, y:-30, rotate: 0}, {duration:0.3, x:0, y:0, rotate:180}, "<")
    .fromTo("#k-black", {x:15, y:-5, rotate: 20}, {duration:0.25, x:0, y:0, rotate:0}, "<")
    .fromTo("#e-black", {x:-30, y:-30, rotate: -45}, {duration:0.5, x:0, y:0, rotate:0}, "<")
    .fromTo("#y-black", {x:-20, y:-20, rotate: -30}, {duration:0.25, x:0, y:0, rotate:0}, "<")

    return tl;
}


function colorfillAnimation(){
    var tl = gsap.timeline();
    tl.fromTo("#colorfill-white", {x:-1000, y:-1000}, {duration:0.7, x:0, y:0})
    tl.fromTo("#colorfill-black", {x:-1000, y:-1000}, {duration:0.7, x:0, y:0})
    tl.fromTo("#colorfill-pink", {x:-1000, y:-1000}, {duration:0.7, x:0, y:0})
    return tl;
}

function clipAnimation(){
    var tl = gsap.timeline();
    tl.to("#whole-clip", {duration:1, scale:0})
    return tl;
}


var mainTL = gsap.timeline();
mainTL.add(ballAnimation())
.add(logoAnimation(), "-=1.65")
.add(colorfillAnimation(), "-=0.25")
.add(clipAnimation())

GSDevTools.create();