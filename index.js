// Define variables to store the search input and button
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const showMoreButton = document.getElementById('show-more-button');

// Define variable to store the search results container
const searchResults = document.getElementsByClassName('search-results')[0];
let inputData="";
let page = 1;


// Define variable to store the API endpoint URL
const apiUrl = 'https://api.unsplash.com/search/photos';

// Define function to fetch search results from Unsplash API
const fetchSearchResults = async (query) => {
  try {
    const response = await fetch(`${apiUrl}?query=${query}&client_id=WUFxkXUFdJJ9GG2Skp2jdC_7rM-owFhZgkC1giGsMa8`);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.log(error);
  }
};

// Define function to render search results to the DOM
const renderSearchResults = (results) => {
  // Clear previous search results
  searchResults.innerHTML = '';
  
  // Loop through each search result and append it to the search results container
  results.forEach(result => {
    const image = `<img src="${result.urls.small}" alt="${result.alt_description}">`;
    const link = `<a href="${result.links.html}" target="_blank" rel="noopener noreferrer">${result.alt_description}</a>`;
    const searchResult = `<div class="search-result">${image}${link}</div>`;
    searchResults.innerHTML += searchResult;
  });
};

// Add event listener to the search button
searchButton.addEventListener('click', async (event) => {
  event.preventDefault();
  const query = searchInput.value;
  const results = await fetchSearchResults(query);
  renderSearchResults(results);
});

// Define function to fetch more search results from Unsplash API
showMoreButton.addEventListener("click", async function() {
  try {
    const response = await fetch(`${apiUrl}?page=2&client_id=WUFxkXUFdJJ9GG2Skp2jdC_7rM-owFhZgkC1giGsMa8`);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.log(error);
  }

// Add event listener to the show more button
showMoreButton.addEventListener('click', async () => {
  const results = await fetchMoreResults();
  renderSearchResults(results);
  const searchResultsContainer = document.querySelector(".search-results");
  const newSearchResult = document.createElement("div");
  newSearchResult.classList.add("search-result");

  searchResultsContainer.appendChild(newSearchResult);
});


results.map((result)=>{
    const imageWrapper = document.createElement("div");
    imageWrapper.classList.add("search-result");
    const image=document.createElement("img")
    image.src = result.urls.small;
    image.alt = result.alt_description; 
    const imageLink=document.createElement("a");
    imageLink.href=result.links.html;
    imageLink.target= "_blank";
    imageLink.textContent = result.alt_description;

   
    imageWrapper.appendChild(imageLink);
    searchResults.El.appendChild("imageWrapper");

});
{
if(page > 1){
    showMoreButton.style.display ="block";
}
}



const results= data.results;


formEl.addEventListener("submit",(event) => {
    Event.preventDefault(results);
    page = 1;

});
})