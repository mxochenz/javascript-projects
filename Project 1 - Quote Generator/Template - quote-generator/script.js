const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");

let apiQuotes = [];

// Show new quote
function newQuote() {
  // Pick a random quote from apiQuotes array
  const randomQuote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

  authorText.textContent = randomQuote.author || "Unknown";
  // Check quote length to determine styling
  if (randomQuote.quote.length > 50) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }
  quoteText.textContent = randomQuote.quote;
}

// Get Quotes from API
async function getQuotes() {
  const apiURL = "https://random-quotes-freeapi.vercel.app/api/quotes";

  try {
    const response = await fetch(apiURL);
    apiQuotes = await response.json();

    newQuote();
  } catch (error) {
    // catch the error
    alert("Failed to load quotes. Please try again later.");
  }
}

// Tweet Quote
function tweetQuote() {
  const twitterURL = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitterURL, "_blank");
}

// Event Listeners
newQuoteBtn.addEventListener("click", newQuote);
twitterBtn.addEventListener("click", tweetQuote);

// On Load
getQuotes();
