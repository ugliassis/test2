
console.log("Hi"); //checking if working

const DOM = {
    searchInput: null,
    loader: null,
}

const countriesApi = 'https://restcountries.com/v3.1/all'; 

async function getInfoFromAPI(url) {
    const response = await fetch(url);
    const jsonResponse = await response.json(); 
    console.log(jsonResponse);
}
getInfoFromAPI(countriesApi)

function showAllCountries(){
    document.getElementById("showAllCountries").addEventListener("click", drawAllCountries),
}


function drawAllCountries(){
const container = document.getElementById('container');
container.innerHTML = '';

jsonResponse.results.forEach(county => {
    const div = document.createElement("div");
    div.innerHTML = county.name;})

   
    div.addEventListener('click', async () => {
        const response = await fetch(county.url);
        const data = await response.json()

})}


getInfoFromAPI(countriesApi)
