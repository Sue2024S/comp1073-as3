// primary API
// https://thedogapi.com/


//secondary API
// https://developer.nutritionix.com/

//https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=REPLACE_ME'



// base URL & Key for the Dog API
const baseURL = 'https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=';
const key = 'live_NHzATeTac3Hb73la0ZKCubBMtkbFPpZZnM29sGJ3blMVnLJfIx4SorcTtDnZlW4f';
let url;

const select = document.getElementById('cats');
select.addEventListener('change', imageGetter);


function imageGetter(event){

    event.preventDefault();  

    url = baseURL + key;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const imageUrl = data[0].url;
            const imageElement = document.getElementById("breed-image");
            imageElement.src = imageUrl;
        })
        .catch(error => console.error('Error fetching cat image:', error));
}

// const breedGrid = document.querySelector('.breed-grid');
// const apiKey = 'live_NHzATeTac3Hb73la0ZKCubBMtkbFPpZZnM29sGJ3blMVnLJfIx4SorcTtDnZlW4f';

// // Fetch breed data from the Dog API
// function fetchBreeds() {
//     const url = `https://api.thecatapi.com/v1/breeds?api_key=${apiKey}`;
    
//     fetch(url)
//         .then(response => response.json())
//         .then(data => {
//             data.forEach(breed => {
//                 createBreedCard(breed);
//             });
//         })
//         .catch(error => console.error('Error fetching breed data:', error));
// }

// function createCard(breed) {
//     const card = document.createElement('div');
//     card.classList.add('breed-card');
//     card.dataset.breedId = breed.id;

//     const image = document.createElement('img');
//     if (breed.image?.url) {
//         image.src = breed.image.url;
//         image.alt = breed.name;
//     } else {
//         image.src = 'placeholder-image.png'; 
//         image.alt = 'No image available';
//     }
    
//     const name = document.createElement('h3');
//     name.textContent = breed.name;
    
//     card.addEventListener('click', () => {
//         console.log(`Clicked on breed: ${breed.name} (ID: ${breed.id})`);
//             showBreedDetails(breed.id);
//     });
// }