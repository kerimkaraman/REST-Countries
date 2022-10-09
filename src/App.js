import './App.css';
import { useEffect, useState } from 'react';
import Country from './Country';
function App() {

  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data));
  }, [])

  return (
    <div className="App">
      <div className='header'>
        <h1>REST Countries</h1>

      </div>
      <div className='input-area'>
        <input type="text" placeholder='Type something...' value={filter} onChange={(e) => { setFilter(e.target.value) }} />
      </div>
      <div className='items'>
        {
          countries.filter(country => country.name.common.toLowerCase().includes(filter.toLowerCase()) || filter === '')
            .map((country, indx) => {
              const { name, flags, population, region, capital } = country;
              return (
                <Country indx={indx} name={name} flags={flags} population={population} region={region} capital={capital} />
              )
            })
        }
      </div>
    </div>
  );
}

export default App;
