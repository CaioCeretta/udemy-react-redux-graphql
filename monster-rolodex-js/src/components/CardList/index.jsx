import { CardItem } from "../CardItem";
import "./styles.css";

export const CardList = ({monsters}) => {
    
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
