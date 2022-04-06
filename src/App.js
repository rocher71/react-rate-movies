import Button from "./Button";
import styles from "./App.module.css";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [index, setIndex] = useState(0);
  const [value, setValue] = useState(0);

  const onSelect = (event) => {
    setValue(0);
    setIndex(event.target.value);
  };

  const onChange = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select value={index} onChange={onSelect}>
          {coins.map((coin, index) => (
            <option value={index}>
              {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
      {/* api 불러오는 중에는 loaing이 뜸. */}
      {coins.length == 0 ? null : (
        <div>
          <h1>{coins[index].name}</h1>
          <div>
            <label>USD</label>
            <input type="number" value={value} onChange={onChange}></input>
          </div>
          <div>
            <label>{coins[index].name}</label>
            <input
              type="number"
              value={(value / coins[index].quotes.USD.price).toFixed(5)}
            ></input>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
