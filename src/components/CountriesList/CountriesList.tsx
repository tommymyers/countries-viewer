import React from "react";
import CountryItem from "../CountryItem/CountryItem";
import "./CountriesList.css";

interface CountriesListProps {
  countries: any[];
}

const CountriesList: React.FC<CountriesListProps> = ({ countries }) => {
  return (
    <div className="countries">
      {countries.map((country) => (
        <CountryItem key={country.alpha3Code} country={country} />
      ))}
    </div>
  );
};

export default CountriesList;
