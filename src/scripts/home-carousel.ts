(() => {
  const track = document.getElementById("carousel-track");
  const slides = Array.from(document.querySelectorAll<HTMLElement>(".carousel__slide"));
  const dots = Array.from(document.querySelectorAll<HTMLButtonElement>(".carousel__dot"));
  const prev = document.getElementById("carousel-prev");
  const next = document.getElementById("carousel-next");
  const wrap = document.getElementById("render-carousel");

  if (
    !(track instanceof HTMLElement) ||
    !(prev instanceof HTMLButtonElement) ||
    !(next instanceof HTMLButtonElement) ||
    !(wrap instanceof HTMLElement) ||
    slides.length === 0 ||
    dots.length !== slides.length
  ) {
    return;
  }

  let current = 0;
  let timer: ReturnType<typeof setInterval> | undefined;

  function goTo(index: number) {
    dots[current]?.classList.remove("carousel__dot--active");
    slides[current]?.setAttribute("aria-hidden", "true");
    current = ((index % slides.length) + slides.length) % slides.length;
    track.style.transform = `translateX(-${current * 100}%)`;
    dots[current]?.classList.add("carousel__dot--active");
    slides[current]?.removeAttribute("aria-hidden");
  }

  function startTimer() {
    if (timer) {
      clearInterval(timer);
    }

    timer = setInterval(() => goTo(current + 1), 4000);
  }

  prev.addEventListener("click", () => {
    goTo(current - 1);
    startTimer();
  });

  next.addEventListener("click", () => {
    goTo(current + 1);
    startTimer();
  });

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      goTo(index);
      startTimer();
    });
  });

  wrap.addEventListener("mouseenter", () => timer && clearInterval(timer));
  wrap.addEventListener("mouseleave", startTimer);
  wrap.addEventListener("focusin", () => timer && clearInterval(timer));
  wrap.addEventListener("focusout", startTimer);

  startTimer();
})();
