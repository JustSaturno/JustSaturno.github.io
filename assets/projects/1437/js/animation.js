gsap.registerPlugin(ScrollTrigger);

// Animate every title
document.querySelectorAll(".title").forEach(title => {
  gsap.to(title, {
    scale: 3,
    ease: "none",
    transformOrigin: "center center",
    scrollTrigger: {
      trigger: title,
      start: "center center",
      end: "+=1000",
      scrub: true,
      pin: true,
      pinSpacing: true
    }
  });
});

document.querySelectorAll(".text").forEach(text => {

  function wrapTextNodes(element) {
    [...element.childNodes].forEach(node => {

      // Text node
      if (node.nodeType === Node.TEXT_NODE) {

        const fragment = document.createDocumentFragment();

        node.textContent.split("").forEach(char => {
          const span = document.createElement("span");
          span.classList.add("letterText");
          span.innerHTML = char === " " ? "&nbsp;" : char;
          fragment.appendChild(span);
        });

        node.replaceWith(fragment);
      }

      // Element node (recurse into it)
      else if (node.nodeType === Node.ELEMENT_NODE) {
        wrapTextNodes(node);
      }

    });
  }

  wrapTextNodes(text);

  const letters = text.querySelectorAll(".letterText");

  gsap.set(letters, {
    opacity: 0.1
  });

  gsap.to(letters, {
    opacity: 1,
    stagger: 0.03,
    ease: "none",
    scrollTrigger: {
      trigger: text,
      start: "top 80%",
      end: "bottom 70%",
      scrub: true
    }
  });

});