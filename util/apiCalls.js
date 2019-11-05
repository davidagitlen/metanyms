import regeneratorRuntime from "regenerator-runtime";


const urlStart = process.env.VUE_APP_API_URL;
const apiKey = process.env.VUE_APP_API_KEY;

export const getSynonyms = async (word) => {
  const url = urlStart + `/${word}?key=${apiKey}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Sorry, we couldn\'t find the word you were looking for! Please enter a new word.');
  }
  console.log(response)
  const data = await response.json();
  if (!data.length) {
    throw new Error('Sorry, we couldn\'t find the word you were looking for! Please enter a new word.')
  }
  console.log('data', data)
  return data[0];
}