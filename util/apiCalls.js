const urlStart = process.env.VUE_APP_API_URL;
const apiKey = process.env.API_KEY;

export const getSynonyms = async (word) => {
  const url = urlStart + `/${word}?key=${apiKey}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}