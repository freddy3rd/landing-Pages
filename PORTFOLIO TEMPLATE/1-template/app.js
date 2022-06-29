
const tl = gsap.timeline({default: {duration: 1 }});
const overlayOut = gsap.timeline()
const tl1 = gsap.timeline({reverser:false,restart:true,duration:1});
// gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);




// tl1.play();
const navPage = document.querySelectorAll('.pageNav a');




// navPage.forEach(el => {
//     el.addEventListener('click',myFunction);

    
//   });
overlayOut.to('.overlay',
{height: 0,
    stagger:{
    amount: .3,
    ease: "expo.inOut"
    } 
})

function animateOverlay(){
    tl1.to('.overlay',1,
    {height: '100%',
        stagger:{
        amount: .5,
        from:3,
        ease: "expo.inOut"
        } 
    }).to('.overlay',1,
    {height: '0',
        stagger:{
        amount: .5,
        from:'start',
        ease: "expo.inOut"
        } 
    })
}

navPage.forEach(el =>{
    el.addEventListener('click', _=>{
        tl.reversed( !tl.reversed());
        animateOverlay();
    })
 
})


// function myFunction() {
//     tl.reversed( !tl.reversed());
//      tl1.progress(1).reversed( !tl1.reversed()) 
// }









tl

.to(".half-color",{width:'40%'})
.fromTo(".frame",{scaleY:0},{scaleY:1})
.to(".image-container",{width:'300px'})
.to("ul",{x:0})
.fromTo(".socialMedia",{opacity:0,y:100},{opacity:1,y:0},"<")
.fromTo(".detail",{opacity:0,x:100},{opacity:1,x:0},"<")