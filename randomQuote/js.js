const quoteText = document.querySelector(".quote");
const quoteBtn = document.querySelector("button");

const quoteName = document.querySelector(".name")

function randomQuote() {
    fetch('https://api.quotable.io/random')
    .then(res => res.json())
    .then(data => { 
      console.log(data)
      quoteText.innerText = data.content;
      quoteName.innerText = data.author;

    })
}

quoteBtn.addEventListener("click",randomQuote)

