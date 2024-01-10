function showPoem(response) {
 new Typewriter("#poem", {
   strings: response.data.answer,
   autoStart: true,
   delay: 1,
   cursor: "🪶",
 });
}

function generatePoem(event) {
  event.preventDefault();

  const poemTopic = document.querySelector("#poem-topic");
  const poet = document.querySelector("#poet");
  const apiKey = "bc0t009fc86043a8280dae34obbeaad7";
  const prompt = `User instructions: Generate a poem about ${poemTopic.value} written as if you were ${poet.value}.`;
  const context = "You are a poem expert and you love to write short poems.  Your mission is to generate a four line poem in basic html and separate each line with a <br />.  Make sure to follow the user instructions.  Sign the poem with the poet's name inside a <strong> element after the last line of the poem like this: <strong>Poet's name</strong>.";
  const apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(showPoem);
}

const poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
