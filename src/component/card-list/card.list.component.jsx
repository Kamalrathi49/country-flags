import React from "react";

import "./card-list.style.css";

import "../cards/card.style.css";

export const CardList = (props) => {
  return (
    <div className="cardlist">
      {props.countrys.map((country) => (
        <div className="Cards">
          <img
            className="img"
            src={`https://www.countryflags.io/${country.alpha2Code}/flat/64.png`}
            height="80"
            width="120"
          />
          <h1 key={country.alpha2Code}>{country.alpha2Code}</h1>
          <h2> {country.name}</h2>
          <h3>Capital : {country.capital}</h3>
        </div>
      ))}
    </div>
  );
};
