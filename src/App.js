import "./App.css";
import { useState, useEffect } from "react";
import AllCountriesContainer from "./containers/AllCountriesContainer";
import VisitedCountriesContainer from "./containers/VisitedCountriesContainer";

function App() {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);

  useEffect(() => {
    const getAllCountries = async () => {
      try {
        const response = await fetch(`https://restcountries.com/v3.1/all`);
        const data = await response.json();
        const sortedData = data.sort((a, b) => {
          if (a.name.common < b.name.common) {
            return -1;
          }
          if (a.name.common > b.name.common) {
            return 1;
          }
          return 0;
        });
        setCountries(sortedData);
      } catch (error) {
        console.log(error);
      }
    };
    getAllCountries();
  }, []);

  const handleVisit = (country) => {
    setVisitedCountries([...visitedCountries, country]);
    setCountries(countries.filter((c) => c !== country));
  };

  return (
    <div className="app">
      <h1>CountryTracker</h1>
      <div className="main">
        <AllCountriesContainer countries={countries} onVisit={handleVisit} />
        <VisitedCountriesContainer
          visitedCountries={visitedCountries}
        />
      </div>
    </div>
  );
}

export default App;
