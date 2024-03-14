import { useParams } from "react-router-dom";

import "./styles.scss";
import { useEffect, useState } from "react";
import { ProductCard } from "../ProductCard";
import { useSelector } from "react-redux";
import { selectCategoriesIsLoading, selectCategoriesMap } from "../../store/categories/category.selector";
import { Spinner } from "../Spinner";

type CategoryRouteParams = {
  category: string
}

export const Category = () => {
  const { category } = useParams<keyof CategoryRouteParams>() as CategoryRouteParams;

  const categoriesMap = useSelector(selectCategoriesMap)
  const isLoading = useSelector(selectCategoriesIsLoading)

  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);


  return (
    <>

      <h2 className="title">{category.toUpperCase()}</h2>
      {
        isLoading ? (
          <div><Spinner /></div>
        ) : (
          <div className="category-container">
            {products &&
              products.map((product) => {
                return (
                  <ProductCard key={product.id} product={product} />
                )
              }
              )}
          </div>
        )}

    </>
  );
};
