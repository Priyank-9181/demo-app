import emailjs from "@emailjs/browser";

export function fetchData(city, callback, errCallback) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`
  )
    .then(function (response) {
      return response.json();
    })
    .then(callback)
    .catch(errCallback);
}

// (e) => {
//   console.log(e);
// };

export async function fetchPokemonList(page) {
  const limit = 20;
  const offset = page * limit;
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
  );

  const data = await response.json();

  return data;
}

export async function fetchPokemon(url) {
  const response = await fetch(url);
  const data = response.json();
  return data;
}

export async function fetchPokemonDetail(name) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const data = response.json();
  return data;
}

export async function sendMailApiService(form) {
  const response = await emailjs.sendForm(
    process.env.REACT_APP_SERVICE_ID,
    process.env.REACT_APP_TEMPLATE_ID,
    form,
    {
      publicKey: process.env.REACT_APP_PUBLIC_KEY,
    }
  );

  return response;
}
