
function generateRandomQuote() {
    var quotes = [
      "Do not take life too seriously. You will not get out alive.",
      "A friend is someone who knows all about you and still loves you.",
      "Your time is limited, so don't waste it living someone else's life.",
      "If you tell the truth, you don't have to remember anything.",
      "To live is the rarest thing in the world. Most people exist, that is all.",
      "Be yourself; everyone else is already taken.",
      "So many books, so little time."
    ];
  
    var authors = [
      "Elbert Hubbard",
      "Elbert Hubbard",
      "Steve Jobs",
      "Mark Twain",
      "Oscar Wilde",
      " Oscar Wilde",
      " Frank Zappa",
    ];
  
    var index = Math.floor(Math.random() * quotes.length);
  
    document.getElementById("quoteOutput").textContent = `"${quotes[index]}"`;
    document.getElementById("authorOutput").textContent = `-- ${authors[index]}`;
  }

















