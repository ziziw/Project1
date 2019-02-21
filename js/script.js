/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/***
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.

  Recommended:
    - Add at least one `year` and/or `citation` property to at least one
      quote object.
***/
let quotes = [
  {
    quote: "You could be the world's best garbage man, the world's best model; it don't matter what you do if you're the best." ,
    source: "Muhammad Ali"
  },
  {
    quote: "We delight in the beauty of the butterfly, but rarely admit the changes it has gone through to achieve that beauty.",
    source: "Maya Angelou"
  },
  {
    quote: "A journey of a thousand miles begins with a single step",
    source: "Lao Tzu"
  },
  {
    quote: "It is better to fail in originality than to succeed in imitation.",
    source: "Herman Melville"
  },
  {
    quote: "I've failed over and over and over again in my life and that is why I succeed",
    source: "Michael Jordan",
    citation: "Nike Culture: The Sign of the Swoosh",
    year: 1998
  }
];



/***
  Create the `getRandomQuote` function to:
   - generate a random number
   - use the random number to `return` a random quote object from the
     `quotes` array.
***/
function getRandomQuote(){
  let randomNumber = Math.floor(Math.random() * 5);
  return quotes[randomNumber];
}


function getRandomColor(){
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
}


/***
  Create the `printQuote` function to:
   - call the `getRandomQuote` function and assign it to a variable.
   - use the properties of the quote object stored in the variable to
     create your HTML string.
   - use conditionals to make sure the optional properties exist before
     they are added to the HTML string.
   - set the `innerHTML` of the `quote-box` div to the HTML string.
***/
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

  document.getElementById('quote-box').innerHTML = quoteStr;
  document.body.style.backgroundColor = getRandomColor();
  document.getElementById('loadQuote').style.backgroundColor = document.body.style.backgroundColor;
}

setInterval(printQuote, 20000);

/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function. So do not make any changes to the line of code below this
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.
