import regeneratorRuntime from "regenerator-runtime";


const urlStart = process.env.VUE_APP_API_URL;
const apiKey = process.env.VUE_APP_API_KEY;

export const getSynonyms = async (word) => {
  const url = urlStart + `/${word}?key=${apiKey}`;
  const response = await fetch(url);
  console.log(response)
  const data = await response.json();
  console.log('data', data)
  return data[0];
}