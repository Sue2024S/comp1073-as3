// primary API
// https://thedogapi.com/


//secondary API
// https://developer.nutritionix.com/

//https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=REPLACE_ME
const baseURL = 'https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=';

const key = 'live_NHzATeTac3Hb73la0ZKCubBMtkbFPpZZnM29sGJ3blMVnLJfIx4SorcTtDnZlW4f';
let url;

const search = document.getElementById('search');
search.addEventListener('click', imageGetter);
//     const breed = document.getElementById('breed').value;
//     if (breed) {
//         imageGetter(breed);
//     } else {
//         alert('Please enter a breed name.');
//     }
// });

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

