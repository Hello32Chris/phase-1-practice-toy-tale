fetch('http://localhost:3000/toys')
  .then((response) => response.json())
  .then((data) => renderData(data))

function renderData(toyArray) {
  const toyDiv = document.querySelector('#toy-collection');
  toyArray.forEach((toy) => {
    const toyImage = document.createElement('img');
    const toyName = document.createElement('h2');
    const toyLikes = document.createElement('p');
    const toyButton = document.createElement('button');
    const div = document.createElement('div');
    div.className = "card";
    // console.log(toy);
    toyImage.src = toy.image;
    toyName.textContent = toy.name;
    toyLikes.textContent = toy.likes;
    toyButton.textContent = "I love this one!";
    toyButton.className = 'like-btn';
    toyImage.className = 'toy-avatar';

    toyButton.addEventListener('click', (e) => {
      toyLikes.textContent = parseInt(toyLikes.textContent) + 1;
    })
    
    
    
    div.append(toyName, toyLikes, toyImage, toyButton);
    // toyDiv.appendChild(toyLikes);
    // toyDiv.appendChild(toyImage);
    // toyDiv.appendChild(toyButton);
    console.log(toyDiv);
    toyDiv.append(div);
  }); 
};


// capture that toy's id,
// calculate the new number of likes,
// submit the patch request, and
// update the toy's card in the DOM based on the Response returned by the fetch request.


const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const newToy = {
    name : e.target.name.value,
    image : e.target.image.value,
    likes : 0,
  };
  toyFormContainer.style.display = "none";
  renderData([newToy]);
})






// STEPS:
// 1. 



// For without a POST request, the mini-steps would be:
// 1. On form submit, fire a submit event.
// 2. Create new toy object or create new toy HTML elements directly (both will work)
// 3. Render new elements or render toy object to page.


// create an h2 --- toy name
// create an img with a source
// create a <p> with a number of likes
// create a button with a like

let addToy = false;




  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });





