"use strict";

const apiUrl = "/db.json";
const baseApi = "http://localhost:3000";
const beerList = document.getElementById("beer-list");

async function fetchData() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

function displayBeerDetails(beer) {
    document.getElementById("beer-name").textContent = beer.name;
    document.getElementById("beer-image").src = beer.image_url;
    document.getElementById("beer-description").textContent = beer.description;
}

document.getElementById("update-container").addEventListener("submit", (evt) => {
    evt.preventDefault();
    const form = evt.target;
    document.getElementById("beer-description").innerHTML = form.description.value;
    form.reset();
});

document.getElementById("review-form").addEventListener("submit", (evt) => {
    evt.preventDefault();
    const form = evt.target;
    document.getElementById("review-list").innerHTML += `<li>${form.review.value}</li>`;
    form.reset();
});

(async () => {
    const data = await fetchData();
    const beers = data.beers;

    if (beers.length > 0) {
        displayBeerDetails(beers[0]); // Display the first beer by default
        beerList.innerHTML = ""; // Clear the beer list

        beers.forEach((beer) => {
            const beerItem = document.createElement("li");
            beerItem.textContent = beer.name;

            beerItem.addEventListener("click", () => {
                displayBeerDetails(beer);
            });

            beerList.appendChild(beerItem);
        });
    }
})();