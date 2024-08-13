function locomotiveAnimation(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}
function navAnimation() {
    let nav = document.querySelector("nav")
    nav.addEventListener("mouseenter", () => {
        let tl = gsap.timeline()  // "timeline" makes the code synchronus 
        tl.to("#navBottom", {
            height: "25vh"
        })
        tl.to(".navPart2 h5", {
            display: "block"
        })
        tl.to(".navPart2 h5 span", {
            y: 0,
            stagger: {
                // duration:0.3,
                amount: 0.6
            }
        })
    })
    nav.addEventListener("mouseleave", () => {
        let tl = gsap.timeline()
        tl.to(".navPart2 h5 span", {
            y: 25,
            stagger: {
                amount: 0.2
            }
        })
        tl.to(".navPart2 h5", {
            display: "none",
            duration: 0.1
        })
        tl.to("#navBottom", {
            height: 0,
            duration: 0.2
        })
    })

}
function page2Animation() {
    let rightElems = document.querySelectorAll(".rightElem")
    rightElems.forEach((elem) => {
        elem.addEventListener("mouseenter", () => {
            gsap.to(elem.childNodes[3], {
                opacity: 1,
                scale: 1
            })
        })
        elem.addEventListener("mouseleave", () => {
            gsap.to(elem.childNodes[3], {
                opacity: 0,
                scale: 0
            })
        })
        elem.addEventListener("mousemove", (dets) => {
            gsap.to(elem.childNodes[3], {
                x: dets.x - elem.getBoundingClientRect().x - 50,
                y: dets.y - elem.getBoundingClientRect().y - 130
            })
        })
    })
}
function page3VideoAnimation() {
    let page3Center = document.querySelector(".page3Center")
    let video = document.querySelector("#page3 video")

    page3Center.addEventListener("click", () => {
        video.play()
        video.muted = true
        video.currentTime = 50
        gsap.to(video, {
            transform: "scaleX(1) scaleY(1)",
            opacity: 1,
            borderRadius: 0,
            duration: 0.5
        })
    })
    video.addEventListener("click", () => {
        video.pause()
        gsap.to(video, {
            transform: "scaleX(0.7) scaleY(0)",
            opacity: 0,
            borderRadius: "30px"
        })
    })
}
function page4Animations(){
    let sections = document.querySelectorAll(".secRight")
    sections.forEach(function(elem) {    
        elem.addEventListener("click",function(){
            elem.childNodes[3].style.opacity = 1
            elem.childNodes[3].play()
        })
        elem.addEventListener("mouseleave", function(){
            elem.childNodes[3].style.opacity = 0
            elem.childNodes[3].load()
        })
        elem.addEventListener("mouseenter",function(){
            gsap.to(elem.childNodes[5], {
                opacity: 1,
                scale: 1
            })
        })
          elem.addEventListener("mouseleave", () => {
            gsap.to(elem.childNodes[5], {
                opacity: 0,
                scale: 0
            })
        })
          elem.addEventListener("click", () => {
            gsap.to(elem.childNodes[5], {
                opacity: 0,
                scale: 0
            })
        })
        elem.addEventListener("mousemove", (dets) => {
            gsap.to(elem.childNodes[5], {
                x: dets.x - elem.getBoundingClientRect().x ,
                y: dets.y - elem.getBoundingClientRect().y
            })
        })
    })
    
}
function page6ScrollAnimation(){
    gsap.from("#btm6Part2 h4",{
        x:0,
        scrollTrigger:{
            trigger:"#btm6Part2",
            scroller:"#main",
            start:"top 80%",
            end:"top 10%",
            scrub:true
        }
    })
    gsap.from("#btm6Part3 h4",{
        x:0,
        scrollTrigger:{
            trigger:"#btm6Part3",
            scroller:"#main",
            start:"top 80%",
            end:"top 10%",
            scrub:true
        }
    })
    gsap.from("#btm6Part4 h4",{
        x:0,
        scrollTrigger:{
            trigger:"#btm6Part4",
            scroller:"#main",
            start:"top 80%",
            end:"top 10%",
            scrub:true
        }
    })
    
}
function loadingAnimation(){
    let tl = gsap.timeline()
    tl.from("#page1",{
        opacity:0,
        duration:0.1,
        delay:0.2
    })
    tl.from("#page1",{
        transform:"scaleX(0.7) scaleY(0.01)  translateY(100%)",
        borderRadius:"100px",
        duration:2,
        ease:"power4.out"
    })
    tl.from("nav",{
        opacity:0,
        delay:-0.2
    })
    tl.from("#page1 h1, #page1 p, #page1 div",{
        opacity:0,
        duration:0.5,
        stagger:0.2
    })
    
}

loadingAnimation()
locomotiveAnimation()
navAnimation()
page2Animation()
page3VideoAnimation()
page4Animations()
page6ScrollAnimation()