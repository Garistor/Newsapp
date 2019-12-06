const url = "https://newsapi.org/v2/top-headlines?country=fr&category=sports&apiKey=8a289d8bea654ba39549ef275ccd38bd";
const url2 = "https://newsapi.org/v2/top-headlines?country=fr&category=business&apiKey=8a289d8bea654ba39549ef275ccd38bd";

export async function getNews() {
  let result = await fetch(url).then(response => response.json());
  return result.articles;
}