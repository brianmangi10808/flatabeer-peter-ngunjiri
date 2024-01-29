"use strict";

const apiUrl2 = "/db2.json";
const beerList2 = document.getElementById("beer-list-brewery");

async function fetchData2() {
    try {
        const response = await fetch(apiUrl2);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

async function init() {
    try {
        const data = await fetchData2();
        console.log("Fetched data:", data);

        const beers = data.beers;

        if (beers.length > 0) {
            const beerListBrewery = document.getElementById("beer-list-brewery");
            console.log("Selected element:", beerListBrewery);

            beerListBrewery.innerHTML = ""; // Clear the beer list

            beers.forEach((beer) => {
                const beerItem = document.createElement("li");
                beerItem.textContent = beer.name;

                beerItem.addEventListener("click", () => {
                    displayBeerDetails2(beer);
                });

                beerListBrewery.appendChild(beerItem);
            });

            // Display details for the first beer initially
            displayBeerDetails2(beers[0]);
        }
    } catch (error) {
        console.error("Error initializing:", error);
    }
}

function displayBeerDetails2(beer) {
    document.getElementById("keg-name").textContent = beer.name;
    document.getElementById("keg-image").src = beer.image_url;
    document.getElementById("keg-description").textContent = beer.description;
}

document.getElementById("update-container-keg").addEventListener("submit", (evt) => {
    evt.preventDefault();
    const form = evt.target;
    document.getElementById("keg-description").textContent = form["update-beer-keg"].value;
    form.reset();
});

document.getElementById("review-form-keg").addEventListener("submit", (evt) => {
    evt.preventDefault();
    const form = evt.target;
    document.getElementById("review-list-keg").innerHTML += `<li>${form["review-keg"].value}</li>`;
    form.reset();
});

// Call the init function to start the application
init();
