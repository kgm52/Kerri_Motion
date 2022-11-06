import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(DrawSVGPlugin, GSDevTools);


function toggleAnimation(){
    var tl = gsap.timeline();
    tl.from("#happy-face", {duration:1, drawSVG:"0%"});
    return tl;
}


var mainTl = gsap.timeline();
mainTl.add(toggleAnimation());

