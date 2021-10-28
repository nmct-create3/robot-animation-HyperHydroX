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

// LISTERNERS
const btn_fast = document.querySelector(".js-fast");
const btn_normal = document.querySelector(".js-normal");
const btn_slow = document.querySelector(".js-slow");
const btn_controls = document.querySelector(".js-pause");
const btn_play = btn_controls.querySelector(".c-play-icon--play")
const btn_pause = btn_controls.querySelector(".c-play-icon--pause")


// EVENTS
btn_fast.onclick = () => tl.timeScale(2);
btn_normal.onclick = () => tl.timeScale(1);
btn_slow.onclick = () => tl.timeScale(.5);
btn_pause.addEventListener("click", () => {
  tl.pause();
  btn_play.classList.remove("o-hide-accessible")
  btn_pause.classList.add("o-hide-accessible")
})

btn_play.addEventListener("click", () => {
  tl.resume();
  btn_pause.classList.remove("o-hide-accessible")
  btn_play.classList.add("o-hide-accessible")
})

// ANIMATION
let tl = gsap.timeline({
  defaults: {
    duration: 1,
    ease: 'power1.inOut',
  },
  repeat: -1,
  yoyoEase: 'Power2.easeOut',
  yoyo: true,
})

tl.set('#shadow',{
    transformOrigin: "50% 100%" 
});

tl.set('#Fire',{
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
);

tl.to('#Fire', {
  scale: 1.25,
  y: 3,
}, 0);

tl.to('#Torso', {
  y: -1,
}, 0);

tl.to('#Arm-left', {
  rotation: -2.5,
}, 0);

tl.to('#Arm-right', {
  rotation: 2.5,
}, 0);



//