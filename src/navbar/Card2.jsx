
import { Card, Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import axios from 'axios';

import '../App.css';


function Card2() {

  const [bitCoinRate, setbitCoinRate] = useState({});
  const [sorted, setsorted] = useState("desc");
  const [currency, setcurrency] = useState("USD");
  const [amount, setAmount] = useState(1);
  const [newAmount, setnewAmount] = useState("");
  const [lastTime, setlastTime] = useState(0);
  const [todayDate, settodayDate] = useState("");

  useEffect(() => {
    axios
      .get("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then((response) => {
        setbitCoinRate(response.data.bpi);
        settodayDate(convertUTCDateToLocalDate(response.data.time.updated));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSort = () => {
    setsorted(sorted === "desc" ? "asc" : "desc");
  };

  const handleCurrency = (event) => {
    setcurrency(event.target.value);
  };

  const handleMoney = (event) => {
    setAmount(event.target.value);
  };

  const handleConversion = () => {
    const rate = bitCoinRate[currency].rate_float;
    const converted = amount / rate;
    setnewAmount(converted.toFixed(8));
  };

  const sortedFigures = Object.entries(bitCoinRate).sort((a, b) => {
    const rateA = sorted === "desc" ? a[1].rate_float : b[1].rate_float;
    const rateB = sorted === "desc" ? b[1].rate_float : a[1].rate_float;
    return rateB - rateA;
  });

  const convertUTCDateToLocalDate = (date) => {
    const newDate = new Date(date);
    const offset = newDate.getTimezoneOffset();
    const localDate = new Date(newDate.getTime() - (offset * 60 * 1000));
    return localDate.toLocaleString();
  };

  const handleRestore = () => {
    const currentTime = new Date().getTime();
    const elapsedTime = (currentTime - lastTime) / 1000;
    if (elapsedTime < 300) {
      alert(`You can refetch the rate in ${(300 - elapsedTime).toFixed(0)} seconds.`);
      return;
    }
    axios
      .get("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then((response) => {
        setbitCoinRate(response.data.bpi);
        settodayDate(convertUTCDateToLocalDate(response.data.time.updated));
        setlastTime(new Date().getTime());
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="card2 max-w-lg rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">
          <h1>Conversion</h1>
        </div>

        <button onClick={handleSort}>
          {sorted === "desc" ? "Sort Ascending" : "Sort Descending"}
        </button>

        <select value={currency} onChange={handleCurrency}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
        </select>

        <input type="number" value={amount} onChange={handleMoney} />
         <button className="btn" onClick={handleConversion}>Convert</button>

        {newAmount && (
          <div>
            {amount} {currency} is {newAmount} BTC
          </div>
  

        )}

<p>Last updated at: {todayDate}</p> 
<button className="refetch" onClick={handleRestore}>Refresh</button>
      </div>
    </div>
  );
}








export default Card2;
