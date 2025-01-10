const GIPHY_API_KEY = "9WjOdIIDDMnbW9nnJDkkTL1HUYxue7Dq";
const GIPHY_API_URL = "https://api.giphy.com/v1/gifs/search";

const searchButton = document.getElementById("searchButton");
const searchInput = document.getElementById("searchInput");
const limitInput = document.getElementById("limit");
const gifContainer = document.getElementById("gifContainer");

searchButton.addEventListener("click", () => {
  const searchTerm = searchInput.value;
  const limit = limitInput.value;
  const url = `${GIPHY_API_URL}?api_key=${GIPHY_API_KEY}&q=${searchTerm}&limit=${limit}`;

  fetch(url)
    .then(response => response.json())
    .then(jsonData => {
      console.log(jsonData);
      jsonData.data.forEach(gif => {
        const gifElement = document.createElement("img");
        gifElement.src = gif.images.fixed_width.url;
        gifContainer.appendChild(gifElement);
      });
    })
    .catch(error => {
      console.error("Error fetching GIFs:", error);
    });
});
