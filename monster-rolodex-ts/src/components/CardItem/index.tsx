
import './styles.css'

type CardItemProps = {
  monster: {
    id: string,
    name: string,
    email: string
  }
}


export const CardItem = ({monster}: CardItemProps) => {

  
    console.log('render from card')
    

    return (
      <div className='card-container'>
        <img src={`https://www.robohash.org/${monster.id}?set=2&size=180x180`} alt={`monster ${monster.name}`} />
        <p>{monster.name}</p>
        <p>{monster.email}</p>
      </div>
    )


}