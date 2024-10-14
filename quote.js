const quotes = [
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Success is not the key to happiness. Happiness is the key to success.", author: "Albert Schweitzer" },
    { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
    { text: "Your time is limited, don't waste it living someone else's life.", author: "Steve Jobs" }
  ];
  
  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  }
  
  const quoteElement = document.getElementById('quote');
  const authorElement = document.getElementById('author');
  
  const randomQuote = getRandomQuote();
  quoteElement.textContent = randomQuote.text;
  authorElement.textContent = `– ${randomQuote.author}`;
  