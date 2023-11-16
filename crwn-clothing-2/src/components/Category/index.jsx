import { useParams } from "react-router-dom";

import "./styles.scss";
import { useEffect, useState } from "react";
// import { CategoriesContext } from "../../contexts/categories.context";
import { ProductCard } from "../ProductCard";
import { useSelector } from "react-redux";
import { selectCategoriesIsLoading, selectCategoriesMap } from "../../store/categories/categories.selector";
import { Spinner } from "../Spinner";

export const Category = () => {
  const { category } = useParams();

  console.log('render/re-rendering category component')

  const categoriesMap = useSelector(selectCategoriesMap)
  const isLoading = useSelector(selectCategoriesIsLoading)


  // const { categoriesMap } = useContext(CategoriesContext);

  const [products, setProducts] = useState(categoriesMap[category]);

  // const products = categoriesMap[category];
  /* If we initiated the const like this, essentially, everytime this component re renders the prouducts would be gotten
  so what we instead wanna do is this way \/ */
  useEffect(() => {
    console.log('effect fired, calling setProducts')
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  console.log(isLoading)

  return (
    <>

      <h2 className="title">{category.toUpperCase()}</h2>
      {
        isLoading ? (<div><Spinner /></div>) : (<div className="category-container">
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
        )}

    </>
  );
};
