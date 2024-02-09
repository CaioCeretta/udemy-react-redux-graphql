import { ChangeEvent } from 'react';
import './styles.css';

interface ISearchBoxProps {
  placeholder?: string
  className: string;
  onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void;

}


function SearchBox ({placeholder, onChangeHandler, className}: ISearchBoxProps) {

    return (
      <input 
        className={`search-box ${className}`}
        type="search"
        placeholder={placeholder ? placeholder : ''}
        onChange={onChangeHandler}
      />
    )

}

export { SearchBox };
