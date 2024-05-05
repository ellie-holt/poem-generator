function generatePoem(event) {
  event.preventDefault();
  new Typewriter("#poem", {
    strings: `Joy and woe are woven fine, <br />A clothing for the soul divine`,
    autoStart: true,
    delay: 1,
  });
}

let formElement = document.querySelector("#prompt-form");
formElement.addEventListener("submit", generatePoem);
