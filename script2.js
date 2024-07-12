var icon = document.querySelector(".m-icon");
var nav = document.querySelector(".mobile-nav");
var cross = document.querySelector(".close")

icon.addEventListener("click", function () {
    nav.style.display = "flex";
    nav.style.left = "0%";
})
cross.addEventListener("click", function () {
    nav.style.display = "none";
})









var card = document.querySelector(".products");
function createcard([img, name, price]) {
    var clutter = `
    <div class="card">
       <div class="imgbox">
        <img src=${img} alt="">
       </div>
    <div class="contentbox">
        <h3>${name}</h3>
        <div class="price">${price}</div>
       <div class="btns">
        <a href="#" class="detail btn">view details</a>
        <a href="#" class="add btn ">add to cart</a>
       </div>
    </div>
</div>
    `;
    card.innerHTML += clutter;
}

var item1 = ["./images/images/img2.png",
    "handmade basket",
    "50rs"
]
var item2 = ["./images/images/img12.png",
    "wooden clock",
    "300rs"
]
var item3 = ["./images/images/img13.png",
    "pottery mug",
    "150rs"
]
var item4 = ["./images/images/img14.png",
    "wall frame",
    "200rs"
]
var item5 = ["./images/images/img15.png",
    "show piece",
    "300rs"
]
var item6 = ["./images/images/img17.png",
    "brass",
    "500rs"
]
createcard(item1);
createcard(item2);
createcard(item3);
createcard(item4);
createcard(item5);
createcard(item6);
// createcard(item1);
// createcard(item1);
// createcard(item1);





var circle = document.querySelector("#smcircle");
var frame = document.querySelector(".frame");
var change = document.querySelector(".change");
const lerp = (x, y, a) => x * (1 - a) + y * a;

var text1 = document.querySelector(".text1")

window.addEventListener("mousemove", function (dets) {
    // document.querySelector("#smcircle").style.top = `${dets.clientY}px`;
    // document.querySelector("#smcircle").style.left = `${dets.clientX}px`

    gsap.to(circle, {
        x: dets.clientX,
        y: dets.clientY,
        duration: 0.2,
        ease: Expo
    })
})

frame.addEventListener("mousemove", function (dets) {

    // var dims = frame.getBoundingClientRect();

    // var xstart = dims.x;
    // var xend = dims.x + dims.width;

    //  var zeroone = gsap.utils.mapRange(xstart, xend, 0, 1, dets.clientX);
    //   console.log(lerp(-50, -50, zeroone))


    gsap.to(circle, {
        scale: 6,
        background: "white",
        border: "none",
        mixBlendMode: "difference"

    })
    gsap.to(".frame span", {
        color: "white",
        duration: 0.4,
        y: "-5vw"
    })

    gsap.to(text1, {
        scale: 5,
        background: "white",
        border: "none",
        mixBlendMode: "color"
    })

    // gsap.to(".frame span",{
    //    x: lerp(-50, -50, zeroone),
    //    duration: .3
    // })
})
frame.addEventListener("mouseleave", function (dets) {

    gsap.to(circle, {
        scale: 1,
        background: "transparent",
        border: "2px solid #0e1f2a",
        mixBlendMode: "initial"
    })

    gsap.to(".frame span", {
        color: "#b58c67",
        duration: 0.4,
        y: 0
    })
})






ScrollTrigger.create({
    onUpdate: function (prg) {
        gsap.to("#progress", { width: Math.floor(prg.progress * 100) + "%" });
    }
})