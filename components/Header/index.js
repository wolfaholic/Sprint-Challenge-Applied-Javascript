// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {

//defining the elements
const newsHead = document.createElement('div');
const newsDate = document.createElement('span');
const newsTitle = document.createElement('h1');
const newsTemp = document.createElement('span')

//adding classes
newsHead.classList.add('header')
newsDate.classList.add('date')
newsTemp.classList.add('temp')


//appending 
newsHead.append(newsDate);
newsHead.append(newsTitle);
newsHead.append(newsTemp);


//content
newsDate.textContent = 'March 28th 2019';
newsTitle.textContent = 'Lambda Times';
newsTemp.textContent = '98°';

newsHead.appendChild(newsDate);
newsHead.appendChild(newsTitle);
newsHead.appendChild(newsTemp);

//other
return newsHead;
}

const headerContainer = document.querySelector(".header-container");
headerContainer.appendChild(Header());

 