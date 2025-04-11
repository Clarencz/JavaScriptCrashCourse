//fetch = function used for making http requests to fetch resources.(Json style data, images,files.) - it simplifies asynchronous data fetching in javascript and used for interacting with APIs to retrieve and send data asynchronously over the web.
//fetch(url,{options})
//fetch(url,{methods})

fetchData();
async function fetchData() {
  try {
    const pokemonName = document
      .getElementById("pokemonName")
      .value.toLowerCase();
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );
    if (!response.ok) {
      throw new Error("could not fetch resource");
    }
    const data = await response.json();
    const pokemonSprite = data.sprites.front_default;
    const imgElement = document.getElementById("pokemonSprite");
    imgElement.src = pokemonSprite;
    imgElement.style.display = "block";
  } catch (error) {
    console.error(error);
  }
}

// fetch("https://pokeapi.co/api/v2/pokemon/ditto")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("could not fetch resource");
//     }
//     return response.json();
//   })
//   .then((data) => console.log(data))
//   .catch((response) => console.log(error));
