// //fetching data from db.json

// // const listEl =document.querySelector('ul')
// // fetch ('./db.json')
// // .then(res => res.json())
// // .then(db => {
// //     db.forEach(post => {
// //    listEl.insertAdjacentHTML('beforeend',`<l1>${post.name}</li>`)
        
// //     });
// // })
// // Make a GET request to retrieve the beer data
// fetch('/beers/1')
//   .then(response => response.json())
//   .then(data => {
//     // Populate the webpage with the beer details
//     document.getElementById('beerName').innerText = data.name;
//     document.getElementById('beerImage').src = data.image_url;
//     document.getElementById('beerDescription').innerText = data.description;

//     // Display reviews
//     const reviewsContainer = document.getElementById('reviews');
//     data.reviews.forEach(review => {
//       const reviewElement = document.createElement('li');
//       reviewElement.innerText = review;
//       reviewsContainer.appendChild(reviewElement);
//     });
//   })
//   .catch(error => console.error('Error fetching beer data:', error));





  document.addEventListener("DOMContentLoaded", function() {
    // Fetch the JSON data from your db.json file
    fetch('db.json')
      .then(response => response.json())
      .then(data => {
        // Call a function to display the beers
        displayBeers(data.beers);
      })
      .catch(error => console.error('Error fetching data:', error));
  });

  function displayBeers(beers) {
    const beerContainer = document.getElementById('beerContainer');

    // Iterate through the beers and create a card for each
    beers.forEach(beer => {
      const beerCard = document.createElement('div');
      beerCard.className = 'beer-card';

      // Display beer information
      beerCard.innerHTML = `
        <h2>${beer.name}</h2>
        <img src="${beer.image_url}" alt="${beer.name}">
        <p>${beer.description}</p>
        <h3>Reviews:</h3>
        <ul>
          ${beer.reviews.map(review => `<li>${review}</li>`).join('')}
        </ul>
      `;

      // Append the beer card to the container
      beerContainer.appendChild(beerCard);
    });
  }