import { Component } from "react";

import './styles.css'


export class CardItem extends Component {

  
  render() {
    console.log('render from card')
    
    const {id, name, email} = this.props

    return (
      <div className='card-container'>
        <img src={`https://www.robohash.org/${id}?set=2&size=180x180`} alt={`monster ${name}`} />
        <p>{name}</p>
        <p>{email}</p>
      </div>
    )
  }


}