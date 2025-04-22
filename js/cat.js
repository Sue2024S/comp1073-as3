// primary API
// https://thedogapi.com/

//secondary API
// https://developer.nutritionix.com/


// base URL & Key for the Dog API
const baseURL = 'https://api.thecatapi.com/v1';
const key = 'live_NHzATeTac3Hb73la0ZKCubBMtkbFPpZZnM29sGJ3blMVnLJfIx4SorcTtDnZlW4f';
let url;

const select = document.getElementById('cats');
select.addEventListener('change', catGetter);


async function catGetter(event){
    

    event.preventDefault(); 
    
    const breedId = this.value;
    if(!breedId) return;

// Get images
    const imageCats = await fetch(`${baseURL}/images/search?limit=1&breed_ids=${breedId}&api_key=${key}`);

    const imageData = await imageCats.json();
    const cat = imageData[0];
    console.log(cat);

// Get breed list
    const breedsRes = await fetch(`${baseURL}/breeds?api_key=${key}`);

    const breedData = await breedsRes.json();
    const breedInfo = breedData.find(breed => breed.id === breedId);

    const imageBreedCat = document.getElementById('breed-image');
    imageBreedCat.src = cat.url;

    const temperament = document.getElementById('temperament');
    temperament.innerHTML = breedInfo.temperament;

    const lifeSpan = document.getElementById('life_span');
    lifeSpan.innerHTML = breedInfo.temperament;

    const weight = document.getElementById('weight');
    weight.innerHTML = breedInfo.weight.metric;

    const origin = document.getElementById('origin');
    origin.innerHTML = breedInfo.origin;

    const description = document.getElementById('description');
    description.innerHTML = breedInfo.description;
}

//Back to list button: to clear the Cat image and breed information when clicked

const backButton = document.getElementById('back-to-list');

backButton.addEventListener('click', clearAll);

function clearAll(){
    document.getElementById('breed-image').src = '';
    document.getElementById('temperament').innerHTML = '';
    document.getElementById('life_span').innerHTML = '';
    document.getElementById('weight').innerHTML = '';
    document.getElementById('origin').innerHTML = '';
    document.getElementById('description').innerHTML = '';

    select.value = '';
}




