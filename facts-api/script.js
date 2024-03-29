const API = "https://uselessfacts.jsph.pl";
const TODAYS_ENDPOINT = `${API}/api/v2/facts/today`;
const RANDOM_ENDPOINT = `${API}/api/v2/facts/random`;

function getFact(endpoint, selector) {
  const element = document.querySelector(selector);

  fetch(endpoint)
    .then((response) => {
      if (response.status !== 200) {
        element.textContent = "ERROR with endpoint";
        return;
      }
      return response.json();
    })
    .then((data) => {
      element.textContent = data.text;
    })
    .catch((error) => {
      console.error(error);
      element.textContent = "ERROR with fetching data. Try again later";
    });
}

getFact(TODAYS_ENDPOINT, "#todaysFact");
getFact(RANDOM_ENDPOINT, "#randomFact");
