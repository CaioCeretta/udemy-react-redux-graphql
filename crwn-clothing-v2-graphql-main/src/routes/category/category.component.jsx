import { useContext, useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';

import ProductCard from '../../components/product-card/product-card.component';
import Spinner from '../../components/spinner/spinner.component';

import { CategoriesContext } from '../../contexts/categories.context';

import { CategoryContainer, Title } from './category.styles';
import { gql, useMutation, useQuery } from '@apollo/client';

const GET_CATEGORY = gql`
  query($title: String!) {
    getCollectionsByTitle(title: $title) {
      id,
      title,
      items {
        id
        name
        price
        imageUrl
      }
    }
  }
`

//Mutation to add a new category
const SET_CATEGORY = gql`
  mutation($category: Category!) {
    addCategory(category: $category) {
      id
      title
      items {
        id
        name
        price
        imageUrl
      }
    }
  }

`

const Category = () => {
  const { category } = useParams();
  // const { categoriesMap, loading } = useContext(CategoriesContext);
  const [products, setProducts] = useState();

  // adding category query
  // const [addCategory, {loading, error, data}] = useMutation(SET_CATEGORY)

  // addCategory({ variables: {category: categoryObject}})


  const { loading, error, data} = useQuery(GET_CATEGORY, {
    variables: {
      title: category
    }
  })

  useEffect(() => { 
    if(data) {
      const {
        getCollectionsByTitle: {items}
      } = data;  

      setProducts(items)
    }
  }, [category, data])



  // useEffect(() => {
  //   setProducts(categoriesMap[category]);
  // }, [category, categoriesMap]);



  return (
    <Fragment>
      {
        loading ? <Spinner /> : (
          <>
            <Title>{category.toUpperCase()}</Title>
            <CategoryContainer>
              {products &&
                products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
            </CategoryContainer>
          </>
        )
      }
    </Fragment>
  );
};

export default Category;
