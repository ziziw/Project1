/** This list of objects has 6 objects.
  Each object has properties of quote, source, and category.
  Only 1 object has citation and year.
**/
let quotes = [
  {
    quote: "You could be the world's best garbage man, the world's best model; it don't matter what you do if you're the best." ,
    source: "Muhammad Ali",
    category: "Sport"
  },
  {
    quote: "We delight in the beauty of the butterfly, but rarely admit the changes it has gone through to achieve that beauty.",
    source: "Maya Angelou",
    category: "Literature"
  },
  {
    quote: "A journey of a thousand miles begins with a single step.",
    source: "Lao Tzu",
    category: "Philosophy"
  },
  {
    quote: "It is better to fail in originality than to succeed in imitation.",
    source: "Herman Melville",
    category: "Literature"
  },
  {
    quote: "I've failed over and over and over again in my life and that is why I succeed.",
    source: "Michael Jordan",
    citation: "Nike Culture: The Sign of the Swoosh",
    year: 1998,
    category: "Sport"
  },
  {
    quote: "However difficult life may seem, there is always something you can do and succeed at.",
    source: "Stephen Hawking",
    category: "Science"
  }
];

//Creates a random number between 0 and the number of objects in the list.
function getRandomQuote(){
  let randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}

//Get a random RGB color.
function getRandomColor(){
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
}

/** Prints the quote with quote and source.
  Citation or/and year are added to the string depending on the object.
  Category is added to the string depending on the object.
  Randomly change the backgroundColor of both the body and the button everytime a new quote is printed.
**/
function printQuote(){
  let quoteObj = getRandomQuote();
  let quoteStr = "";
  if(quoteObj.citation && quoteObj.year){
    quoteStr = `<p class="quote"> ${quoteObj.quote} </p>
                <p class="source"> ${quoteObj.source}
                  <span class="citation"> ${quoteObj.citation} </span>
                  <span class="year"> ${quoteObj.year} </span>
                </p>`
  } else if(quoteObj.year){
    quoteStr = `<p class="quote"> ${quoteObj.quote} </p>
                <p class="source"> ${quoteObj.source}
                  <span class="year"> ${quoteObj.year} </span>
                </p>`
  } else if(quoteObj.citation){
    quoteStr = `<p class="quote"> ${quoteObj.quote} </p>
                <p class="source"> ${quoteObj.source}
                  <span class="citation"> ${quoteObj.citation} </span>
                </p>`
  } else {
    quoteStr = `<p class="quote"> ${quoteObj.quote} </p>
                <p class="source"> ${quoteObj.source} </p>`
  }

  if(quoteObj.category){
    quoteStr += `<p class="category"> ${quoteObj.category} </p>`;
  }

  //Prints the quote.
  document.getElementById('quote-box').innerHTML = quoteStr;
  //Set the body's backgroundColor to a new random color everytime a quote is printed.
  document.body.style.backgroundColor = getRandomColor();
  //Set the button's backgroundColor to the same color as the body's backgroundColor.
  document.getElementById('loadQuote').style.backgroundColor = document.body.style.backgroundColor;
}

//Auto refresh the quote after 20 seconds.
setInterval(printQuote, 20000);

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
