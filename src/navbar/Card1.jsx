import { Card, Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import '../App.css';

function Card1() {

  const [rates, setRates] = useState(null);

  useEffect(() => {
    fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => response.json())
      .then(data => setRates(data.bpi))
      .catch(error => console.log(error));
  }, []);
  return (
<div className="card1 max-w-lg rounded overflow-hidden shadow-lg">
  
  <div className="px-3 py-4 ">
    <div className="font-bold text-xl mb-2">
    <h3 className="ab" data-testid="create-currency-header">Current Conversion Rate</h3></div>
    {rates && (
          <div>
            <p>{`1 BTC = ${rates.USD.rate}  `}
            {`1 BTC = $${rates.USD.rate_float.toFixed(2)} ${rates.USD.description}`}</p>
            <p>{`€1 = ${rates.EUR.rate} `} {`1 BTC = €${rates.EUR.rate_float.toFixed(2)}${rates.EUR.description}`}</p>
            <p>{`£1 = ${rates.GBP.rate} `}{`1 BTC = £${rates.GBP.rate_float.toFixed(2)}${rates.GBP.description}`}</p>
            <hr />
           
            
          </div>
        )}
   
  </div>

  
</div>

  )
}

export default Card1;