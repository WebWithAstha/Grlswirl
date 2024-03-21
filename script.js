


var tl = gsap.timeline(
   { scrollTrigger:{
        scroller:"body",
        trigger:"#still-page",
        start:"top 0%",
        scrub:2,
        pin:true
    }}

)
tl
.from("#img-div",{
    width:"100vw",
    height:"100vh"
},"f")
.to("#overlay-container",{
    transform:"translateY(-27%)",  
},"f")
.to(".i1",{
    transform:"translateY(-100%)",
},"w")
.to("#overlay-container",{
    transform:"translateY(-46%)",  
},"w")

.to("#overlay-container",{
    transform:"translateY(-60%)",  
},"q")
.to(".i2",{
    transform:"translateY(-100%)",
},"q")

.to(".i3",{
    transform:"translateY(-100%)",
},"e")
.to("#overlay-container",{
    transform:"translateY(-75%)",  
},"e")
.to("#img-div",{
    opacity:0,
},"r")
.to("#overlay-container",{
    transform:"translateY(-85%)",  
},"r")
.to("#overlay-container",{
    transform:"translateY(-100%)",  
},"last")
.from(".h1abs",{
    opacity:0
},"last")


