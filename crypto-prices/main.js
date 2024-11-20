import axios from 'axios';

const setCryptos = (cryptos) => {
  let innerHTML = '';
  cryptos.forEach((crypto) => {
    innerHTML += `<tr key=${crypto.id}>
      <td>${crypto.rank}</td>
      <td>${crypto.name}</td>
      <td>${crypto.symbol}</td>
      <td>${parseFloat(crypto.priceUsd).toFixed(2)}</td>
      <td>${parseFloat(crypto.changePercent24Hr).toFixed(4)}</td>
    </tr>`;
  });

  document.getElementById('tbody').innerHTML = innerHTML;
};

const fetchData = async () => {
  try {
    const result = await axios('https://api.coincap.io/v2/assets');
    console.log(result);
    setCryptos(result.data.data);
  } catch (error) {
    console.error(error);
  }
};

fetchData();
