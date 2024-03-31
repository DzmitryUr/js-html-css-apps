const URL = "https://api.chucknorris.io/jokes/random";

async function getJoke(url, selector) {
  const element = document.querySelector(selector);

  try {
    const response = await fetch(url);
    if (!response.ok) {
      element.textContent = "ERROR on the server";
    }

    const data = await response.json();

    element.textContent = data.value;
  } catch (error) {
    console.error(error);
    element.textContent = "ERROR. Try again later";
  }
}

document
  .getElementById("btnNext")
  .addEventListener("click", () => getJoke(URL, "#joke"));

getJoke(URL, "#joke");
