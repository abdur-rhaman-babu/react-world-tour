import { useState } from 'react';
import './Country.css';
const Country = ({country, handleVisitedCountries}) => {
    // console.log(country)
    const [isVisited, setIsVisited] = useState(false)
    const {name, flags, population, area, cca3} = country;

    const handleVisited = () =>{
        setIsVisited(!isVisited)
    }

    return (
        <div className=  {isVisited ? 'visited': 'country'}>
            <h3>Name: {name?.common}</h3>
            <img src={flags?.png} alt="" />
            <h4>Population: {population}</h4>
            <h4>Area: {area}</h4>
            <h4>code: {cca3}</h4>
            <button onClick={handleVisited}>
                {isVisited ? 'Visited' : 'Visit'}
            </button> <br /><br />
            <button onClick={()=>handleVisitedCountries(country)}>Mark Visited</button>
        </div>
    );
};

export default Country;