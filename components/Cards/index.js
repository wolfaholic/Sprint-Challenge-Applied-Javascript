// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.




const newsEntry = document.querySelector('.cards-container');

axios
.get('https://lambda-times-backend.herokuapp.com/articles')
.then (response => {
    const lambdaArticles = response.data.lambdaArticles
    lambdaArticles.forEach(item => {
const article = articlePanal(item)
articleEntry.appendchild(article)

    });
})
.catch(error => {
    console.log(error)
})

function articleEntry(data) => {
///elements
    const article = document.createElement('div');
	const headLine = document.createElement('div');
	const author = document.createElement('div');
	const imgWrap = document.createElement('div');
	const authorImg = document.createElement('img');
	const authSig = document.createElement('span');


///appending


///class List


//contnet

return article;
}