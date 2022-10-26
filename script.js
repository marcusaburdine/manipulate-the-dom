let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];




function shortTitle() {
  let mainTitleEl = document.getElementById('main-title');
  mainTitleEl.textContent = "I've come to  DOMinate!";
}
shortTitle();


function changeBodyColor() {
  let bodyEl = document.querySelector('body');
  bodyEl.style.backgroundColor = 'teal';
}
changeBodyColor()


function removeLastFav() {
  let favThingsEl = document.getElementById('favorite-things');
  favThingsEl.lastElementChild.remove();
}
removeLastFav()


function specialTitle() {
  let specialTitleEl = document.querySelectorAll('.special-title');
  specialTitleEl.forEach(function(elem) {
  elem.style.fontSize = '2rem';
});
};
specialTitle();


function removeChicago() {
  let pastRacesListArray = document.querySelectorAll('#past-races > li');
  pastRacesListArray.forEach(function(liEl) {
  if(liEl.textContent === 'Chicago') {
    liEl.remove();
    return;
  }
});

}
removeChicago();


function addMiami() {
  let newLiEl = document.createElement('li');
  newLiEl.textContent = 'Miami';

  let pastRacesULEl = document.getElementById('past-races');
  pastRacesULEl.append(newLiEl);

  return newLiEl;
}
let newLiElement = addMiami();




function createBlogPost(newLiElment) {
  let mainEl = document.querySelector('.main');

  let newBlogDiv = document.createElement('div');
  newBlogDiv.classList.add('blog-post', 'purple');

  let newBlogH1 = document.createElement('h1');
  newBlogH1.textContent = newLiElment.textContent;

  let newBlogP = document.createElement('p');
  newBlogP.textContent = "I RACED ACROSS THE BEACHES!";

  newBlogDiv.append(newBlogH1,newBlogP);
  mainEl.append(newBlogDiv);
}
createBlogPost(newLiElement);


function randomQuote() {
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').innerText = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };

  let quoteTitleEl = document.getElementById('quote-title');
  quoteTitleEl.addEventListener('click', function() {
    randomQuote();
  });
}
randomQuote();




function mouseEvents() {
  let allBlogPosts = document.querySelectorAll('.blog-post');
  console.log(allBlogPosts);
  allBlogPosts.forEach(function(blogpost) {
    console.log()
    blogpost.addEventListener('mouseout', function() {

      blogpost.classList.toggle('red');
    });
    blogpost.addEventListener('mouseenter', function() {
      blogpost.classList.toggle('red');
    });
  });
}
mouseEvents()
