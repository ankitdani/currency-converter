import React, { useEffect, useState } from "react";

function App() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("INR");
  const [toCurrency, setToCurrency] = useState("USD");
  const [result, setResult] = useState();

  useEffect(
    function () {
      async function convertCurrency() {
        const response = await fetch(
          `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`
        );
        const data = await response.json();
        // console.log(data.rates[toCurrency]);
        setResult(data.rates[toCurrency]);
      }
      if (fromCurrency === toCurrency) return setResult(amount);
      convertCurrency();
    },
    [amount, fromCurrency, toCurrency]
  );

  return (
    <div>
      <h1>Currency Converter</h1>
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      ></input>
      <select
        value={fromCurrency}
        onChange={(e) => setFromCurrency(e.target.value)}
      >
        <option val="CAD">CAD</option>
        <option val="EUR">EUR</option>
        <option val="INR">INR</option>
        <option val="USD">USD</option>
      </select>
      <select
        value={toCurrency}
        onChange={(e) => setToCurrency(e.target.value)}
      >
        <option val="CAD">CAD</option>
        <option val="EUR">EUR</option>
        <option val="INR">INR</option>
        <option val="USD">USD</option>
      </select>
      <p>
        {amount} {fromCurrency} = {result} {toCurrency}
      </p>
    </div>
  );
}

export default App;
