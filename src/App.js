import { Component } from "react";

import logo from "./logo.svg";
import "./App.css";
import { render } from "@testing-library/react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monster: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        this.setState(
          () => {
            return { monster: users };
          },
          () => {
            console.log(this.state);
          }
        );
      });
  }

  render() {
    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="search monster"
          onChange={(event) => {
            console.log(event);
            const searchstring = event.target.value.toLocaleLowerCase();
            const filtermonster = this.state.monster.filter((monster) => {
              return monster.name.toLocaleLowerCase().includes(searchstring);
            });

            this.setState(() => {
              return { monster: filtermonster };
            });
          }}
        />

        {this.state.monster.map((monster) => {
          return (
            <div key={monster.id}>
              {" "}
              <h1>{monster.name}</h1>{" "}
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
