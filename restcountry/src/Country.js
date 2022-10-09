import React from 'react';
import './country.css';

function Country(props) {
    return (
        <div className='country-element' key={props.indx}>
            <img src={props.flags.png} alt={props.name.common} />
            <h2 className='name'>Name: <span>{props.name.common}</span> </h2>
            <h5 className='official'>Official: <span>{props.name.official}</span></h5>
            <h4 className='population'>Population: <span>{props.population}</span> </h4>
            <h4 className='region'>Region: <span>{props.region}</span> </h4>
            <h4 className='capital'>Capital: <span>{props.capital}</span> </h4>
        </div>
    )
}

export default Country