import { Component } from "react";
import "./styles.css";
import { CardItem } from "../CardItem";

export class CardList extends Component {
  render() {
    console.log("render from cardlist");
    console.log(this.props);
    console.log(this.props.monsters);
    const { monsters } = this.props;

    return (
      <div className="card-list">
        {
          monsters.map((monster) => {
            const {id, name, email} = monster

          return (
          
            <CardItem key={id} id={id} name={name} email={email} />
            /* <img src={`https://www.robohash.org/${monster.id}?set=2&size=180x180`} alt={`monster ${name}`} />
            <h1>{name}</h1>
            <p>{email}</p> */
          
        )
        })}
      </div>
    );
  }
}
