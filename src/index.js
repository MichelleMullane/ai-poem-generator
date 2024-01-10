function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "here's the poem",
    autoStart: true,
    delay: 1,
    cursor: "🪶",
  });
}

const poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
