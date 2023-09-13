
import './styles.css'


export const CardItem = ({id, name, email}) => {

  
    console.log('render from card')
    

    return (
      <div className='card-container'>
        <img src={`https://www.robohash.org/${id}?set=2&size=180x180`} alt={`monster ${name}`} />
        <p>{name}</p>
        <p>{email}</p>
      </div>
    )


}