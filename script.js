function scrBy(x, y) {
    window.scrollBy({
        left: x, top: y,
        behavior: "smooth"
    });
}

function scrInto(id) {
    document.querySelector(id).scrollIntoView({
        behavior: "smooth"
    });
}

gsap.to(".front_page", {
    top: "-100%",
    left: "-100%",
    opacity: 1,
    // display:"none",
    duration: 0.5,
    delay: 2
})


gsap.to(".front_page2", {
    top: "-100vh",
    duration: 1,
    delay: 3
})


gsap.to(".text1", {
    bottom: "18%",
    delay: 5.1,
    duration: 1,
})
var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1",
        start: "100% 100%",
        end: "100% 10%",
        // markers:true,
        // pin:true,
        scrub: 2,
        stagger: 1,
        scroll: "smooth"
    }
})
tl
    .to("#m_img", {
        top: "20%",
        ease: Power1.easeInOut,
        duration: 1
    })
    // .to(".text1",{
    //     top:"-10%",
    //     ease:Power1.easeInOut,
    // })

    .to(".nav", {
        background: "rgb(231 212 178)",
        scrub: 1
    })

var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page2",
        // markers:true,
        start: "20% 80%",
        end: "20% 70%",
        scrub: 2
    },
})

tl2
    .from(".text3 p", {
        bottom: "50%",
        opacity: 1,
        // ease:Power1.easeIn,
        scrub: 1
    })

// .to(".img img",{
//     opacity:1,
//     display:"flex",
//     scale:1,
//     scrub:2,
//     duration:0.2,
//     ease:Power1.easeInOut
// })

var tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page3",
        // markers:true,
        start: "-10% 70%",
        end: "-10% 70%",
        // pin:true,
        scrub: 2,
        stagger: 1,
        scroll: "smooth"
    },
})

tl3
    .to(".nav", {
        background: "#cfb892",
        ease: Power0.easeIn
    })



var tl5 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page4",
        // markers:true,
        start: "10% 70%",
        end: "10% 60%",
        scrub: 2,
        stagger: 1,
        scroll: "smooth"
    },
})

tl5
    .to(".nav", {
        background: "rgb(231 212 178)",
        ease: Power1.easeInOut
    })


var tl6 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page5",
        // markers:true,
        start: "20% 70%",
        end: "60% 10%",
        scrub: 2,
        scroll: "smooth",
        stagger: 2
    },
})

tl6
    .to(".page5-img1 img", {
        // scale:1.3,
        top: "10%"
    })


// tl7 = gsap.timeline({
//     scrollTrigger:{
//     trigger:".page4",
//     // markers:true,
//     start:"20% 70%",
//     end:"20% 10%",
//     scrub:2,
//     scroll:"smooth"
//     },
// })

// tl7
// .to(".products",{
//      top:"10%",
//      ease:Expo.easeInOut
// })


var tl8 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page3",
        // markers:true,
        start: "-20% 90%",
        end: "-20% 50%",
        scrub: 1,
        stagger: 1
    },
})

tl8
    .to(".page3", {
        // top: "380vh",
        // left:"0%",
        opacity: 1,
        ease: Expo.easeInOut,
        scale: 1,

    })
gsap.from(".text4", {
    scrollTrigger: {
        trigger: ".page3-1",
        start: "50% 90%",
        end: "50% 80%",
        scrub: 1.5,
        //  markers:true
    },
    top: "35%",
    ease: Power0.easeOut,
    duration: 1
})
gsap.from(".page3-img-1", {
    scrollTrigger: {
        trigger: ".page3-1",
        start: "50% 90%",
        end: "50% 80%",
        scrub: 1.5,
        //  markers:true
    },
    top: "40%",
    ease: Power0.easeOut,
    duration: 1
})
gsap.from(".page3-img-2", {
    scrollTrigger: {
        trigger: ".page3-1",
        start: "50% 90%",
        end: "50% 80%",
        scrub: 1.5,
        //  markers:true
    },
    top: "70%",
    ease: Power0.easeOut,
    duration: 1
})
gsap.from(".page3-img-3", {
    scrollTrigger: {
        trigger: ".page3-1",
        start: "50% 90%",
        end: "50% 80%",
        scrub: 1.5,
        //  markers:true
    },
    top: "10%",
    ease: Power0.easeOut,
    duration: 1
})




gsap.set(".rotate-img", {
    top: "100%",
})




gsap.to(".rotate-img", {
    scrollTrigger: {
        trigger: ".page1",
        start: "center center",
        end: "center 0%",
        scrub: 1.5,
        markers:true
    },
    top: "-50vh",
    rotate: "720deg",
    ease: Power0.easeOut,
    duration: 1
})

var tl10 = gsap.timeline({
    scrollTrigger: {
        trigger: ".top-div",
        start: "10% 100%",
        end: "70% 30%",
        // markers:true,
        // pin:true,
        scrub: 2,
        stagger: 2
    },
})


tl10
    .to(".artist1", {
        top: "-9vw;",
        rotate: "-720deg",
        opacity: 1,
        ease: Circ.easeOut,
        // duration:2
    })
    .to(".artist1", {
        left: "3vw",
        ease: Power0.easeIn,
        stagger: 0.2,
        // delay:0,
        duration: 0.2
    }
    )


    .to(".artists", {
        left: "52vw",
        ease: Power0.easeIn,
        stagger: 0.2,
        // delay:1,
        duration: 0.1
    })

    .to(".artists", {
        left: "22vw",
        ease: Power0.easeIn,
        stagger: 0.2,
        duration: 0.2
    }
    )
    .to(".artists", {
        delay: 0.3
    })

gsap.from(".text7", {
    scrollTrigger: {
        trigger: ".page7",
        start: "0% 80%",
        end: "0% 40%",
        scrub: 1.5,
        // markers:true
    },
    top: "50vh",
    ease: Power0.easeOut,
    duration: 1
})
gsap.from(".div7", {
    scrollTrigger: {
        trigger: ".page7",
        start: "0% 80%",
        end: "0% 40%",
        scrub: 1.5,
        // markers:true
    },
    top: "50vh",
    ease: Power0.easeOut,
    duration: 1
})

// gsap.from(".div7",{
//     scrollTrigger: {
//         trigger:".page7",
//         start:"0% 80%",
//         end:"0% 80%",
//         scrub:1.5,
//         // markers:true
//     },
//     // top:"50vh",
//     left:"-10vw",
//     ease: Power2.easeInOut,
//     duration:0.1
// })
gsap.from(".text5 p", {
    scrollTrigger: {
        trigger: ".page5",
        start: "70% 80%",
        end: "70% 40%",
        scrub: 1.5,
        //  markers:true
    },
    top: "100%",
    ease: Power0.easeOut,
    duration: 1
})

gsap.from(".products", {
    scrollTrigger: {
        trigger: ".page4",
        start: "40% 100%",
        end: "40% 70%",
        scrub: 1.5,
        //  markers:true
    },
    top: "40%",
    ease: Power0.easeOut,
    duration: 1
})


var tl11 = gsap.timeline({
    scrollTrigger: {
        trigger: ".footer",
        // markers:true,
        start: "30% 80%",
        end: "30% 70%",
        scrub: 2,
    },
})

tl11
    .to(".nav", {
        background: "#0e1f2a",
        ease: Power0.easeIn
    })


gsap.to(".scale img", {
    scrollTrigger: {
        trigger: ".page2",
        start: "50% 90%",
        end: "50% 20%",
        scrub: 1.5,
        //  markers:true
    },
    opacity: 1,
    display: "flex",
    scale: 1,
    scrub: 2,
    duration: 0.2,
    ease: Power1.easeInOut
})