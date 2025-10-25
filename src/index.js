function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let userInstructionsInput = document.querySelector("#user-instructions");
  let apiKey = "o9f9ab326ef453b45bfe0f44453a6b2t";
  let context =
    "You are a romantic poem expert and love to write short poems. Your mission is to generate a four line poem and separate each line with a <br />. Make sure to follow the user instructions. Do not include a title to the poem. Sign the poem at the end with SheCodes AI inside a <strong> element.";
  let prompt = `User instructions are to generate a poem about ${userInstructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?context=${context}&prompt=${prompt}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `⌛ Generating your poem about ${userInstructionsInput.value}`;

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
