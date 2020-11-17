import React from "react";
import "./App.css";
import Navigationbar from "./components/Navigationbar";
import CardDisplay from "./components/CardDisplay";
import { FormControl, Select, MenuItem, Avatar } from "@material-ui/core";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      country: {
        code: "worldwide",
        name: "Worldwide",
        flag: "",
      },
      countries: [],
      data: {
        total_deaths: 0,
        new_deaths: 0,
        total_cases: 0,
        new_cases: 0,
        total_recovered: 0,
        new_recovered: 0,
      },
    };
    this.onCountryChange = this.onCountryChange.bind(this);
  }

  componentDidMount() {
    const getCountriesData = async () => {
      var c = [];
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          c = data.map((country) => ({
            name: country.country,
            code: country.countryInfo.iso3,
            flag: country.countryInfo.flag,
          }));
          this.setState({
            countries: c,
          });
        });
    };
    getCountriesData();

    const getRelevantData = async () => {
      await fetch("https://disease.sh/v3/covid-19/all")
        .then((data) => data.json())
        .then((data) => {
          var c = {
            total_deaths: data.deaths,
            new_deaths: data.todayDeaths,
            total_cases: data.cases,
            new_cases: data.todayCases,
            total_recovered: data.recovered,
            new_recovered: data.todayRecovered,
          };
          this.setState({
            data: c,
          });
        });
    };
    getRelevantData();
  }

  onCountryChange(event) {
    const countryCode = event.target.value;
    for (var i = 0; i < this.state.countries.length; i++) {
      if (this.state.countries[i].code === countryCode) {
        var c = this.state.countries[i];
        break;
      }
    }
    this.setState({
      country: c,
    });
    if (event.target.value === "worldwide") {
      const getRelevantData = async () => {
        await fetch("https://disease.sh/v3/covid-19/all")
          .then((data) => data.json())
          .then((data) => {
            var c = {
              total_deaths: data.deaths,
              new_deaths: data.todayDeaths,
              total_cases: data.cases,
              new_cases: data.todayCases,
              total_recovered: data.recovered,
              new_recovered: data.todayRecovered,
            };
            this.setState({
              data: c,
            });
          });
      };
      getRelevantData();
    } else {
      const getRelevantData = async () => {
        await fetch(
          "https://disease.sh/v3/covid-19/countries/".concat(event.target.value)
        )
          .then((data) => data.json())
          .then((data) => {
            var c = {
              total_deaths: data.deaths,
              new_deaths: data.todayDeaths,
              total_cases: data.cases,
              new_cases: data.todayCases,
              total_recovered: data.recovered,
              new_recovered: data.todayRecovered,
            };
            this.setState({
              data: c,
            });
          });
      };
      getRelevantData();
    }
  }

  render() {
    return (
      <div className="app">
        <Navigationbar />
        <div className="app__select">
          <Avatar
            alt="flag"
            src={this.state.country.flag}
            className="app__flag"
          />
          <FormControl className="app__select__form">
            <Select
              value={this.state.country.code}
              onChange={this.onCountryChange}
              label={this.state.country.name}
            >
              <MenuItem value="worldwide">Worldwide</MenuItem>
              {this.state.countries.map((country) => (
                <MenuItem value={country.code}>{country.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className="app__cards">
          <CardDisplay
            name="Reported Cases"
            total={this.state.data.total_cases}
            new={this.state.data.new_cases}
          />
          <CardDisplay
            name="Reported Deaths"
            total={this.state.data.total_deaths}
            new={this.state.data.new_deaths}
          />
          <CardDisplay
            name="Reported Recovery"
            total={this.state.data.total_recovered}
            new={this.state.data.new_recovered}
          />
        </div>
      </div>
    );
  }
}

export default App;
