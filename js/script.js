//Prettier extension used

const quotes = [
  {
    quote:
      "If we are open only to discoveries which will accord with what we know already, we may as well stay shut.",
    source: "Alan Watts",
    citation: "The Wisdom of Insecurity",
    year: "1951"
  },

  {
    quote:
      "Knowing Is Not Enough; We Must Apply. Wishing Is Not Enough; We Must Do.",
    source: "Johann Wolfgang Von Goethe"
  },

  {
    quote: "Whether You Think You Can Or Think You Can’t, You’re Right.",
    source: "Henry Ford"
  },

  { quote: "Creativity Is Intelligence Having Fun", source: "Albert Einstein" },

  {
    quote: "Life is 10% what happens to you and 90% how you react to it.",
    source: "Charles R. Swindoll"
  }
];

// function to grab one of the five quotes randomly and return it to a single item array

let getRandomQuote = () => {
  let ranQ = quotes[Math.floor(Math.random() * quotes.length)];
  return [ranQ];
};

// function that pulls the getRandomQuote() function, and uses template literals to print the HTML to the screen

//  ? if there is no citation or year, : an empty string is printed instead (if/else)

let printQuote = () => {
  let pickedQ = getRandomQuote();
  console.log(pickedQ);
  let htmlDisplay = `<p class="quote"> ${pickedQ["0"].quote}</p>
  <p class="source"> ${pickedQ["0"].source}
  <span class="citation"> ${
    pickedQ["0"].citation ? ", " + pickedQ["0"].citation + "," : ""
  }</span>
  <span class="year"> ${pickedQ["0"].year ? pickedQ["0"].year : ""}</span>
  </p>`;
  document.getElementById("quote-box").innerHTML = htmlDisplay;
};

// document retrieves the element by Id, which is the Id= for the button, and on the event listener of a click, runs the printQuote function

document
  .getElementById("loadQuote")
  .addEventListener("click", printQuote, false);
