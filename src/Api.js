export async function fetchNews() {
  const API_KEY = "6f699111eaf24621b93d9bfb00ec824f"; // Replace with your NewsAPI key
  const BASE_URL = "https://newsapi.org/v2/everything";
  const fromDate = "2023-08-18";
  const toDate = "2023-08-18";
  const sortBy = "popularity";

  const response = await fetch(
    `${BASE_URL}?q=apple&from=${fromDate}&to=${toDate}&sortBy=${sortBy}&apiKey=${API_KEY}`
  );
  const data = await response.json();
  return data.articles;
}
