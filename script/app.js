// gsap.to('#robot', {duration: 1, x: 50 });
// gsap.from('#robot', {duration: 1, x: 50})
// gsap.set('#robot', {duration: 1, x:50});
// gsap.fromTo('#robot', {x: -50}, {duration: 1, x:50});
// gsap.to('#robot', {
//   duration: 2,
//   ease: 'elastic.out(2.5,0.1)',
//   x: 50,
// })
// let tl = gsap.timeline()

// tl.fromTo('#robot',{
//   y: 2.5,
// },{
//   duration: .75,
//   y: -2.5,
// }).to('#shadow', {
//   duration: .75,
//   scale: 0.75,
// })
let duration_time = 1;
const fast = document.querySelector(".js-fast");
const normal = document.querySelector(".js-normal");
const slow = document

// normal.addEventListener("clicked" = () => {

// });
.querySelector(".js-slow");

let tl = gsap.timeline({
  defaults: {
    duration: duration_time,
    ease: 'power1.inOut',
  },
  repeat: -1,
  yoyo: true,
})

tl.set('#shadow',{
    transformOrigin: "50% 100%" 
});

tl.fromTo('#robot',{
  y: 2.5,
},{
  y: -2.5,
})
.to('#shadow', {
  scale: 0.75,
},
  '<',
)