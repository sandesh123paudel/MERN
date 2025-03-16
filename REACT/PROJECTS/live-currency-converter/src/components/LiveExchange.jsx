import { useEffect, useState } from "react";

const LiveExchange = () => {
  const [rates, setRates] = useState(null);
  const [baseCurrency, setBaseCurrency] = useState("NPR");
  const [date, setDate] = useState("");

  useEffect(() => {
    fetch(
      `http://api.exchangeratesapi.io/v1/latest?access_key=0e2ace813c95c781b46b82665cb9bad0`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.rates) {
          setRates(data.rates);
          setDate(data.date);
        }
      })
      .catch((error) => console.error("Error fetching exchange rates:", error));
  }, []);

  return (
    <div className="exchange-container">
      <h3>Live Exchange Rates 🇳🇵</h3>
      <h4>Date: {date}</h4>
      {rates ? (
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Currency</th>
                <th>Exchange Rate</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(rates).map(([currency, rate]) => (
                <tr key={currency}>
                  <td>{currency}</td>
                  <td>
                    1 {baseCurrency} = {(rate / rates[baseCurrency]).toFixed(2)}{" "}
                    {currency}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>Loading exchange rates...</p>
      )}
    </div>
  );
};

export default LiveExchange;
