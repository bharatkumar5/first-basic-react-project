import { Component } from "react";
import "../card-list/card-list-style.css";
import Card from "../card/card";

class CardList extends Component {
  render() {
    console.log(this.props);
    const { monster } = this.props;
    return (
      <div className="card-list">
        {monster.map((monster) => {
          return <Card monster={monster} />;
        })}
      </div>
    );
  }
}

export default CardList;
