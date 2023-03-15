import { useState } from "react";
import Country from "../components/Country";

const AllCountriesContainer = ({ countries, onVisit }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="countrycontainer">
      <h2>All Countries</h2>
      <input
        type="text"
        placeholder="Search countries..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <ol>
        {filteredCountries.map((country) => (
          <Country
            key={country.name.common}
            country={country}
            onVisit={onVisit}
          />
        ))}
      </ol>
    </div>
  );
};

export default AllCountriesContainer;
