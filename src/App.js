import { Component } from "react";

// import logo from "./logo.svg";
import "./App.css";
import CardList from "./components/card-list/Card-List-component";
import SearchBox from "./components/search-box/search-box-components";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monster: [],
      Searchfield: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        this.setState(() => {
          return { monster: users };
        });
      });
  }

  onSearchchange = (event) => {
    const Searchfield = event.target.value.toLocaleLowerCase();

    this.setState(() => {
      return { Searchfield };
    });
  };

  render() {
    const { Searchfield, monster } = this.state;
    const { onSearchchange } = this;

    const filtermonster = monster.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(Searchfield);
    });
    console.log(filtermonster);

    return (
      <div className="App">
        <h1 className="app-title">Monster Card</h1>

        <SearchBox
          onChangeHandler={onSearchchange}
          placeholder="Search Monster"
          type="Search"
          className="monster-Search-box"
        />
        <CardList monster={filtermonster} />
      </div>
    );
  }
}

export default App;
