import React from "react";
import { CardList } from "./component/card-list/card.list.component";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      countrys: [],
      flags: "",
      search: "",
    };
  }
  componentDidMount() {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((Response) => Response.json())
      .then((names) => this.setState({ countrys: names }));

    fetch("https://www.countryflags.io/be/flat/64.png")
      .then((Response) => Response.json())
      .then((flag) => this.setState({ countrys: flag }));
  }
  render() {
    const { countrys, flags, search } = this.state;

    const filterCountry = countrys.filter((var1) =>
      var1.name.toLowerCase().includes(search.toLocaleLowerCase())
    );
    console.log(filterCountry);

    return (
      <div className="App">
        <div className="header">
          <h1 className="heading">Country Flags</h1>
          <div className="searchbar">
            <input
              className="search"
              type="search"
              placeholder="search country"
              onChange={(e) => this.setState({ search: e.target.value })}
            />
          </div>
        </div>
        <CardList countrys={filterCountry} />
      </div>
    );
  }
}

export default App;
