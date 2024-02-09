import { Monster } from "../../App";
import { CardItem } from "../CardItem";
import "./styles.css";

type CardProps = {
  monsters: Monster[];
}


export const CardList = ({ monsters }: CardProps) => {

  return (
    <div className="card-list">
      {
        monsters.map((monster) => {
          const { id, name, email } = monster

          return (

            <CardItem key={id} monster={monster} />
            /* <img src={`https://www.robohash.org/${monster.id}?set=2&size=180x180`} alt={`monster ${name}`} />
            <h1>{name}</h1>
            <p>{email}</p> */

          )
        })}
    </div>
  );
}
