import { useParams } from "react-router-dom";

import "./styles.scss";
import { useContext, useEffect, useState } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import { ProductCard } from "../ProductCard";

export const Category = () => {
  const { category } = useParams();

  const { categoriesMap } = useContext(CategoriesContext);

  const [products, setProducts] = useState(categoriesMap[category]);

  // const products = categoriesMap[category];
  /* If we initiated the const like this, essentially, everytime this component re renders the prouducts would be gotten
  so what we instead wanna do is this way \/ */
  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <h2 className="title">{category.toUpperCase()}</h2>
      <div className="category-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </>
  );
};
