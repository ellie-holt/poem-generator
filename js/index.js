function displayPoem(response) {
  console.log("poem generated");
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
  });
}

function generatePoem(event) {
  event.preventDefault();

  let userInput = document.querySelector("#user-input").value;
  let prompt = `Generate a poem about ${userInput}`;
  let context = "You are a poet";
  let apiKey = "839e3cb4ta48e140e587fa20cb9532o6";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("generating poem");

  axios.get(apiUrl).then(displayPoem);
}

let formElement = document.querySelector("#prompt-form");
formElement.addEventListener("submit", generatePoem);
