let generatedPoem = null;
let poemElement = document.querySelector("#poem");
let formElement = document.querySelector("#prompt-form");
let generatingMessage = document.querySelector("#generating-message");

generatedPoem = new Typewriter(poemElement, {
  delay: 25,
  cursor: "",
  devMode: true,
});

function displayPoem(response) {
  console.log("Displaying poem:", response.data.answer);
  generatingMessage.classList.add("hidden");
  generatedPoem.deleteAll(5).typeString(response.data.answer).start();
}

function generatePoem(event) {
  event.preventDefault();

  let userInput = document.querySelector("#user-input").value;
  let prompt = `Generate a poem about ${userInput}`;
  let context =
    "You are a poet capable of writing poems in a variety of styles. Please write a 4-6 line poem considering the user's prompt. Write the poem using this format: `<h2>Poem Title</h2><hr /><p>poem content</p> Use a <br /> tag after each line which has a line coming after it, but DO NOT include a line break after the final line. The poem should not end with a <br /> tag.";
  let apiKey = "839e3cb4ta48e140e587fa20cb9532o6";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  poemElement.classList.remove("hidden");
  generatingMessage.classList.remove("hidden");
  generatingMessage.innerHTML = `Generating a poem about ${userInput}...`;

  axios.get(apiUrl).then(displayPoem);
}

formElement.addEventListener("submit", generatePoem);
