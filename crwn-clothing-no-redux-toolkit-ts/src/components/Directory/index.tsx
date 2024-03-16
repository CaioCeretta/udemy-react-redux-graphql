import React from 'react'
import { DirectoryItem } from '../DirectoryItem'

import './styles.scss'

interface CategoryProps {
  id: number;
  title: string;
  imageUrl: string;
}

interface DirectoryProps {
  categories: CategoryProps[]
}

export default function Directory({ categories }: DirectoryProps) {
  return (
    <div className='directory-container'>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  )
}
