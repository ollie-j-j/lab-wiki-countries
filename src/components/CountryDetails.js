import React from 'react';
import { useParams, Link } from 'react-router-dom';

const CountryDetails = ({ countries }) => {
    const { countryCode } = useParams();

    const country = countries.find(c => c.alpha3Code === countryCode.toUpperCase());

    if (!country) {
        return <h2>Country not found</h2>
    }

    return (
        <div className="col-7">
            <h1>{ country.name.common }</h1>
            <table className="table">
                <thead></thead>
                <tbody>
                    <tr>
                        <td style={{width: "30%"}}>Capital</td>
                        <td>{ country.capital[0] }</td>
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td>
                        { country.area } km
                            <sup>2</sup>
                        </td>
                    </tr>
                    <tr>
                        <td>Borders</td>
                        <td>
                            <ul>
                                {country.borders.map(border => (
                                    <li key={border}>
                                        <Link to={`/${border}`}>{border}</Link>
                                    </li>
                                ))}
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default CountryDetails;
