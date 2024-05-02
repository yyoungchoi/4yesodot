history.scrollRestoration = "manual";
gsap.registerPlugin(ScrollTrigger);
const lenis = new Lenis();

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);

// header
$(".menu").on("click", function () {
  $(".mega-menu").toggleClass("on");
});

// cursor
const cursor = $("#cursor");
function moveCursor(e) {
  gsap.to(cursor, {
    duration: 0,
    x: e.clientX,
    y: e.clientY,
  });
}
$(document).on("mousemove", moveCursor);
$("a").on({
  mouseover: function () {
    gsap.to(".cursor", {
      scale: 1.5,
    });
  },
  mouseleave: function () {
    gsap.to(".cursor", {
      scale: 1,
    });
  },
});

const sections = gsap.utils.toArray([".grey-section", ".white-section"]);
sections.forEach((section) => {
  ScrollTrigger.create({
    trigger: section,
    start: "0% 0%-=-100",
    end: "100% 0%-=-100",
    toggleClass: {
      targets: ".header-side",
      className: "scroll",
    },
    // markers: true,
  });
});

//sc-hero
ScrollTrigger.create({
  trigger: ".sc-hero",
  start: "20% 0%",
  end: "100% 100%",
  // markers: true,
  onLeave: function () {
    heroTl.reverse();
  },
  onLeaveBack: function () {
    heroTl.play();
  },
});

const heroTl = gsap.timeline({
  paused: true,
  defaults: {
    stagger: 0.3,
    ease: "expo.out",
  },
});
heroTl.from(
  ".sc-hero .title .hide > *",
  {
    yPercent: 120,
    duration: 2,
  },
  "a"
);
heroTl.from(
  ".sc-hero .text-box .hide > *",
  {
    yPercent: 100,
    skewX: "-45",
    duration: 1,
  },
  "a"
);
heroTl.from(
  ".sc-hero .link-more",
  {
    duration: 1,
    yPercent: 100,
  },
  "a+=1"
);
heroTl2 = gsap.timeline({
  paused: true,
});
heroTl2.to(".sc-hero .img-area", { duration: 1, "--width": 0, ease: "expo.out" }, "a+=1");
heroTl2.from(".sc-hero .img-area img", { duration: 3, scale: 1.3, ease: "expo.out" }, "a+=1.5");

heroTl.play();
heroTl2.play();

const heroMotion = gsap.timeline({
  paused: true,
  scrollTrigger: {
    trigger: ".sc-hero",
    start: "10% 0%",
    end: "100% 0%",
    scrub: 0,
  },
});
heroMotion.to(
  ".sc-hero .img-area",
  {
    duration: 3,
    scale: 1.4,
  },
  "a"
);
heroMotion.to(
  ".sc-hero .img-area img",
  {
    duration: 3,
    yPercent: 10,
  },
  "a"
);
heroMotion.to(
  ".sc-hero .contents-area",
  {
    duration: 3,
    yPercent: -40,
  },
  "a"
);

// sc-project
// gsap.set(".sc-project .hide", { yPercent: 0 });

const projectMotion = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-project",
    start: "0% 50%",
    end: "100% 100%",
    // markers: true,
  },
});

projectMotion.from(
  ".sc-project .headline .hide > *",
  {
    yPercent: 100,
    duration: 2,
    stagger: 0.3,
    ease: "expo.out",
  },
  "a"
);
projectMotion.from(
  ".sc-project .desc-title .hide > *",
  {
    yPercent: 100,
    duration: 2,
    stagger: 0.3,
    ease: "expo.out",
  },
  "a=+1"
);
projectMotion.from(
  ".sc-project .desc-text .hide > *",
  {
    yPercent: 100,
    duration: 2,
    stagger: 0.3,
    ease: "expo.out",
  },
  "a=+1"
);

gsap.set(".sc-project .project-area .thumb", {
  "clip-path": "inset(0px 0px 0px 100%)",
});
$(".sc-project .project-area .project-box").each(function (i, el) {
  prdList = gsap.timeline({
    scrollTrigger: {
      trigger: el,
      start: "0% 100%",
      end: "100% 0%",
      // markers: true,
    },
  });
  prdList.to($(this).find(".thumb"), {
    opacity: 1,
    "clip-path": "inset(0px 0px 0px 0%)",
  });
});

// sc-experience
const experiencetext = new SplitType(".sc-experience h3", { types: "lines,words" });
// gsap.set(".sc-experience .line", { yPercent: 0, opacity: 0 });
const experienceMotion = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-experience",
    start: "0% 40%",
    end: "100% 100%",
    // markers: true,
  },
});

experienceMotion.from(
  ".sc-experience .text .word",
  {
    yPercent: 100,
    duration: 0.5,
    stagger: 0.1,
    ease: "expo.out",
  },
  "a=-1"
);
experienceMotion.fromTo(".sc-experience .item img", { clipPath: `circle(0% at 50% 50%)` }, { clipPath: `circle(70% at 50% 50%)` }, "a");
experienceMotion.fromTo(
  ".sc-experience .item h4",
  { opacity: 0 },
  {
    opacity: 1,
    yPercent: 10,
    duration: 4,
    ease: "ease1",
  },
  "a=+1"
);

// sc-about
gsap.set(".sc-experience .line", { yPercent: 0, opacity: 1 });
const aboutMotion = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-about",
    start: "0% 30%",
    end: "100% 100%",
    // markers: true,
  },
});
aboutMotion.to(
  ".bg",
  {
    yPercent: -10,
    scale: 1.3,
    duration: 5,
  },
  "a"
);
aboutMotion.from(
  ".sc-about h4 .hide > *",
  {
    yPercent: 100,
    duration: 2,
    stagger: 0.1,
    ease: "expo.out",
  },
  "a"
);
aboutMotion.from(
  ".sc-about p .hide > *",
  {
    yPercent: 100,
    duration: 4,
    stagger: 0.2,
    ease: "expo.out",
  },
  "a=+3"
);
aboutMotion.from(
  ".sc-about .link-more",
  {
    yPercent: 100,
    duration: 4,
    ease: "expo.out",
  },
  "a=+3"
);
// sc-history
const historyMotion = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-history",
    start: "0% 50%",
    end: "100% 50%",
    scrub: 0,
  },
});
historyMotion.to(".sc-history .contents .img", {
  yPercent: 30,
  duration: 1,
  stagger: 0.1,
});
$(".sc-history .contents .img").on("mousemove", function (e) {
  xVal = e.offsetX - $(this).width() / 2;
  yVal = e.offsetY - $(this).height() / 2;
  gsap.to($(this), {
    scale: 1.3,
    rotation: 15,
    x: xVal,
    y: yVal,
  });
});
$(".sc-history .contents .img").on("mouseleave", function (e) {
  gsap.to($(this), {
    scale: 1,
    rotation: 0,
    x: 0,
    y: 0,
  });
});

// sc-contact
const contactTit = new SplitType(".sc-contact h2", { types: "lines, words" });
const contacttext = new SplitType(".sc-contact h5", { types: "lines, words" });
gsap.set(".sc-contact .line", { yPercent: 0, opacity: 1 });
const contactMotion = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-contact",
    start: "0% 80%",
    end: "100% 100%",
    scrub: 3,
    // markers: true,
  },
});
contactMotion.from(
  ".sc-contact h2 .word",
  {
    yPercent: 100,
    duration: 1,
    ease: "expo.out",
  },
  "a=-1"
);
contactMotion.from(
  ".sc-contact h5 .word",
  {
    yPercent: 100,
    duration: 1,
    ease: "expo.out",
  },
  "a=-1"
);
contactMotion.from(
  ".sc-contact .link-more",
  {
    y: "100%",
    duration: 2,
    stagger: 1,
    ease: "expo.out",
  },
  "a=+1"
);

gsap.to(".circle .wrap", 8, { rotation: "360", ease: Linear.easeNone, repeat: -1 });
