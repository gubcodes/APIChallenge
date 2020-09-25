//assets for later
const url = 'https://cat-fact.herokuapp.com/facts';
const imgUrl = 'https://api.thecatapi.com/v1/images/search';
let divText = document.querySelector('.divText');
let pawsButton = document.querySelector('.btn btn-outline-info');
let catPic = document.querySelector('.catPic');
let container = document.querySelector('.container');
//random number generation
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
let randomNumber = getRandomInt(199);
console.log(randomNumber);

fetch(url)
    .then(function(result) {
        return result.json();
    }).then(function(json) {
        console.log(json);
        displayResults(json);
    });

//WORKS:

function displayResults(json) {
    console.log(json.all[`${randomNumber}`].text);
    divText.innerHTML='<p>' + json.all[`${randomNumber}`].text + '</p>';
}

fetch(imgUrl)
    .then(function(result) {
        return result.json();
    }).then(function(data) {
        console.log(data);
        imageResults(data);
    });

function imageResults(data){
    console.log(data[0].url);
    catPic.setAttribute('src', data[0].url);
}

function refreshPage() { 
    location.reload();
}

pawsButton.addEventListener('click', refreshPage);


// function tryThis(displayResults)

// pawsButton.addEventListener('click', randomNumber);


//FOR TESTING!!

// function random(199) {
//     const result = Math.floor(Math.random() * number);
//     return result;
//   }

// function displayResults(json) {
//     console.log(json.all[`${randomNumber}`].text);
//     divText.innerHTML='<p>' + json.all[`${randomNumber}`].text + '</p>';
// }

// pawsButton.addEventListener('click', displayResults);
