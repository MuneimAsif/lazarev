function navAnimation(){
    let nav = document.querySelector("nav")
nav.addEventListener("mouseenter",()=>{
    let tl = gsap.timeline()  // "timeline" makes the code synchronus 
    tl.to("#navBottom",{
         height:"25vh"
    })
    tl.to(".navPart2 h5",{
        display:"block"
    })
    tl.to(".navPart2 h5 span",{
        y:0,
        stagger:{
        // duration:0.3,
            amount:0.6
        }
    })
})
nav.addEventListener("mouseleave",()=>{
    let tl = gsap.timeline()  
        tl.to(".navPart2 h5 span",{
        y:25,
        stagger:{
            amount:0.2
        }
    })
    tl.to(".navPart2 h5",{
        display:"none",
        duration:0.1
    })
    tl.to("#navBottom",{
        height:0,
        duration:0.2
    })
})

}
navAnimation()