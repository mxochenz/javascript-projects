const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");

let apiQuotes = [];

// Show new quote
function newQuote() {
  const randomQuote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  console.log(randomQuote);
}

// Get Quotes from API
async function getQuotes() {
  const apiURL = "https://random-quotes-freeapi.vercel.app/api/quotes";

  try {
    const response = await fetch(apiURL);
    apiQuotes = await response.json();
    console.log(apiQuotes);

    newQuote();
  } catch (error) {
    // catch the error
  }
}

// On Load
getQuotes();
