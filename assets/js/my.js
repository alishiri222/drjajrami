


// scroll up

let scrollPercentage = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);

  scrollProgress.style.background = `conic-gradient(#01ADEF ${scrollValue}%, #c0c0ff ${scrollValue}%)`;
  progressValue.textContent = `${scrollValue}%`;

  if (pos > 20) {
    scrollProgress.classList.remove("hide");
    scrollProgress.classList.add("show");
  } else {
    scrollProgress.classList.remove("show");
    scrollProgress.classList.add("hide");
  }

  scrollProgress.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
};

window.onscroll = scrollPercentage;
window.onload = scrollPercentage;

/*======================================
  27. Smooth Scroll
  ========================================*/
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

//Comment me out to see issue
const smoother = ScrollSmoother.create({
  wrapper: "#smooth-wrapper",
  content: "#smooth-content",
  smooth: 1.2,
  normalizeScroll: true,
  ignoreMobileResize: true,
  effects: true,
  preventDefault: true,
});

//Horizontal Scroll Galleries
if (document.getElementById("portfolio")) {
  const horizontalSections = gsap.utils.toArray(".horiz-gallery-wrapper");

  horizontalSections.forEach(function (sec, i) {
    const pinWrap = sec.querySelector(".horiz-gallery-strip");

    let pinWrapWidth;
    let horizontalScrollLength;

    function refresh() {
      pinWrapWidth = pinWrap.scrollWidth;
      horizontalScrollLength = pinWrapWidth - window.innerWidth;
    }

    // window.addEventListener("load", function () {
    refresh();
    // Pinning and horizontal scrolling
    let scrollTween = gsap.to(pinWrap, {
      scrollTrigger: {
        scrub: true,
        trigger: sec,
        pin: sec,
        start: "center center",
        end: () => `+=${pinWrapWidth}`,
        invalidateOnRefresh: true,
      },
      x: () => -horizontalScrollLength,
      ease: "none",
    });

    pinWrap.querySelectorAll("[data-speed-x]").forEach((el, i) => {
      let speed = parseFloat(el.getAttribute("data-speed-x"));
      gsap.to(el, {
        x: () => (1 - speed) * (window.innerWidth + el.offsetWidth),
        ease: "none",
        scrollTrigger: {
          containerAnimation: scrollTween,
          trigger: el,
          onRefresh: (self) => {
            let start = Math.max(0, self.start);
            self.setPositions(
              start,
              start + (self.end - self.start) / Math.abs(speed)
            ); // adjust for how long it'll stay in view
            self.animation.progress(0);
          },
          scrub: true,
        },
      });
    });

    ScrollTrigger.addEventListener("refreshInit", refresh);
    // });
  });
}



var typed = new Typed("#typed-text", {
  strings: [
    "به کلینیک آنلاین مبینا جاجرمی خوش آمدید ;",
    "توانبخشی تخصصی در منزل",
    "مشاوره و درمان آنلاین",
  ],
  typeSpeed: 50,
  backSpeed: 30,
  backDelay: 1500,
  loop: true,
  cursorChar: "|",
  showCursor: false,
});

document.getElementById("smsButton").addEventListener("click", function () {

  var name = document.getElementById("name").value;
  var lastName = document.getElementById("lastName").value;
  var phone = document.getElementById("phone").value;
  var nationalCode = document.getElementById("nationalCode").value;

  var smsText =
`جهت دریافت نوبت
نام: ${name}
نام خانوادگی: ${lastName}
تلفن: ${phone}
کد ملی: ${nationalCode}
کلینیک آنلاین د. جاجرمی`;

  var smsLink = "sms:09965663949?body=" + encodeURIComponent(smsText);

  window.location.href = smsLink;
});




