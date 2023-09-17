// Function to fetch exchange rate data from the API
function fetchExchangeRate(baseCurrency) {
    // Replace 'YOUR_API_KEY' with your actual API key from ExchangeRate-API
    const apiKey = '622020a39d12eb23e71755f1';
    const currencyTarget = 'AZN';

    const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${baseCurrency}`;

    return fetch(apiUrl)
      .then(response => response.json())
      .then(data => data.conversion_rates[currencyTarget])
      .catch(error => {
        console.error('Error fetching exchange rate:', error);
      });
  }

  // Function to convert currency
  function convertCurrency() {
    const fromCurrency = document.getElementById('fromCurrency').value;
    const amount = parseFloat(document.getElementById('amount').value);

    if (isNaN(amount)) {
      alert('Please enter a valid number for the amount.');
      return;
    }

    fetchExchangeRate(fromCurrency)
      .then(exchangeRate => {
        // Calculate the equivalent amount in AZN
        const aznAmount = amount * exchangeRate;

        // Update the content of the HTML element with the calculated AZN amount
        document.getElementById('aznAmount').textContent = aznAmount.toFixed(2);
      });
  }