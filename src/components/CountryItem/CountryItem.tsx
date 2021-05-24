import React from "react";
import NumberFormat from "react-number-format";
import "./CountryItem.css";

interface CountryItemProps {
  country: any;
}

const CountryItem: React.FC<CountryItemProps> = ({ country }) => {
  const { name, population, flag, capital, area, currencies, languages } =
    country;
  return (
    <div className="country">
      <div className="country__name">{name}</div>
      <img className="country__flag" src={flag} alt={name + " flag"} />
      <div className="country__stats">
        <div className="country__population">
          Population:{" "}
          <NumberFormat
            displayType="text"
            value={population}
            thousandSeparator
          />
        </div>
        <div className="country__capital">Capital: {capital}</div>
        <div className="country__area">
          Area:{" "}
          <NumberFormat displayType="text" value={area} thousandSeparator /> sq
          km
        </div>
        <div className="country__currency">
          Currenc{currencies.length > 1 ? "ies" : "y"}:{" "}
          {currencies
            .map((currency: any) => `${currency.name} (${currency.symbol})`)
            .join(", ")}
        </div>
        <div className="country__languages">
          Language{languages.length > 1 ? "s" : ""}:{" "}
          {languages.map((language: any) => language.name).join(", ")}
        </div>
      </div>
    </div>
  );
};

export default CountryItem;
