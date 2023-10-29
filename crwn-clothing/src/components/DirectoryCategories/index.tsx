import CategoryItem from '../DirectoryItem';

import './styles.scss';

interface Category {
  id: number,
  title: string,
  imageUrl: string
}

interface DirectoryProps {
  categories: Category[]
}

const DirectoryCategories = ({ categories }: DirectoryProps) => {
  return (
    <div className='directory-container'>
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default DirectoryCategories;