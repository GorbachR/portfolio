if ("IntersectionObserver" in window) {
  const hiddenProp = ".hidden {opacity: 0}";
  const style = document.createElement("style");
  style.textContent = hiddenProp;
  document.head.appendChild(style);

  const interestsObserver = new IntersectionObserver(
    interestsIntersectionCallback,
    {
      root: null,
      rootMargin: "-250px 0px -250px 0px",
      threshold: 0,
    },
  );
  const genericObserver = new IntersectionObserver(
    genericIntersectionCallback,
    {
      root: null,
      rootMargin: "-150px 0px -150px 0px",
      threshold: 0,
    },
  );

  const contactObserver = new IntersectionObserver(contactObserverCallback, {
    root: null,
    rootMargin: "-150px 0px -150px 0px",
    threshold: 0,
  });

  interestsObserver.observe(document.querySelector("#interests")!);
  genericObserver.observe(document.querySelector("#projects")!);
  genericObserver.observe(document.querySelector("#blog")!);
  contactObserver.observe(document.querySelector("#contact")!);
}

function interestsIntersectionCallback(
  entries: IntersectionObserverEntry[],
  observer: IntersectionObserver,
) {
  let currX: number = Number.MAX_VALUE;
  let delay: number = 0;
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      document
        .querySelectorAll("#interests > div")
        .forEach((element: HTMLDivElement) => {
          if (element.getBoundingClientRect().y !== currX) {
            currX = element.getBoundingClientRect().y;
            delay += 0.1;
          }

          element.style.animationDelay = `${delay}s`;
          element.classList.add("fade-in-below");
        });
      observer.disconnect();
    }
  });
}

function genericIntersectionCallback(
  entries: IntersectionObserverEntry[],
  observer: IntersectionObserver,
) {
  let intersectionCount = 0;
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      intersectionCount++;
      entry.target.classList.add("fade-in-below");
    }
  });
  if (
    intersectionCount > 0 &&
    intersectionCount === observer.takeRecords().length
  )
    observer.disconnect();
}

function contactObserverCallback(
  entries: IntersectionObserverEntry[],
  observer: IntersectionObserver,
) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      document.querySelector("#contact-text")?.classList.add("fade-in-below");
      document.querySelector("#contact-form")?.classList.add("fade-in-below");
      observer.disconnect();
    }
  });
}
