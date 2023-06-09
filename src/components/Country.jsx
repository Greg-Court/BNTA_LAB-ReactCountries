const Country = ({ country, onVisit }) => {
  return (
    <li>
      {country.flag} {country.name.common + " "}
      <button onClick={() => onVisit(country)}>I've been there!</button>
    </li>
  );
};

export default Country;
