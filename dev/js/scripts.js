import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(DrawSVGPlugin, GSDevTools);



function ballAnimation(){
    var tl = gsap.timeline();
    tl.to("#ball" {duration:0.5, y:"400"})
}

var mainTL = gsap.timeline();
mainTL.add(ballAnimation())

GSDevTools.create();