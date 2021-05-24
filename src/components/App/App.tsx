import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import CountriesList from "../CountriesList/CountriesList";

function App() {
  const [filter, setFilter] = useState("");
  const [countries, setCountries] = useState<any[]>([]);
  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      console.log(response.data);
      setCountries(response.data);
    });
  }, []);
  console.log(`rendering ${countries.length} countries`);
  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <div className="App">
      Filter:{" "}
      <input
        onChange={(event) => {
          setFilter(event.target.value);
        }}
        type="text"
        autoFocus
      />
      <CountriesList countries={filteredCountries} />
    </div>
  );
}

export default App;
