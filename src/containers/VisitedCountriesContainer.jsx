import VisitedCountry from "../components/VisitedCountry";

const VisitedCountriesContainer = ({ visitedCountries }) => {
  return (
    <div className="countrycontainer">
      <h2>Visited Countries</h2>
      <ol>
        {visitedCountries.map((country) => (
          <VisitedCountry key={country.name.common} country={country} />
        ))}
      </ol>
    </div>
  );
};

export default VisitedCountriesContainer;
