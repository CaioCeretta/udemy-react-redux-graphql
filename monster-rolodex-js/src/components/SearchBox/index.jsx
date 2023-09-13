import './styles.css'

export const SearchBox = ({place, onChangeHandler, className}) => {

    return (
      <input 
        className={`search-box ${className}`}
        type="search"
        placeholder={place}
        onChange={onChangeHandler}
      />
    )

}