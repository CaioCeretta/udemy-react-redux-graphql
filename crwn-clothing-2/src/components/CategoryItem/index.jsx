import './styles.scss'


export function CategoryItem({ category: { id, imageUrl, title } }) {

  return (
        <div key={id} className='category-container'>
          <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }} />
          <div className="category-body-container">
            <h2>{title}</h2>
            <p>Show Now</p>
          </div>

        </div>  )
}
