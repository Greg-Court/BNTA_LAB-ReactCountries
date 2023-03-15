import { useState } from "react";

const VisitedCountry = ({ country}) => {
  const [showInfo, setShowInfo] = useState(false);

  const moreInfo = () => {
    setShowInfo(!showInfo);
  };

  return (
    <li>
      {country.flag} {country.name.common}{" "}
      <button onClick={moreInfo}>
        {showInfo
          ? "Hide info"
          : `What the hell even is ${country.name.common}?`}
      </button>
      {showInfo && (
        <ul>
          <li>Capital: {country.capital && country.capital[0]}</li>
          <li>Region: {country.region}</li>
          <li>Population: {country.population.toLocaleString()}</li>
          <li>Languages: {Object.values(country.languages).join(', ')}</li>
          <li>Main Currency: {Object.values(country.currencies)[0].name + " (" + Object.values(country.currencies)[0].symbol + ") "}</li>
        </ul>
      )}
    </li>
  );
};

export default VisitedCountry;
