import React from 'react'
import { DirectoryItem } from '../DirectoryItem'

import './styles.scss'

interface DirectoryProps {
  categories: {
    id: string;
    title: string;
    imageUrl: string;
  }[]
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
