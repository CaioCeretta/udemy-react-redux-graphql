import React, { Fragment } from "react";

import { CategoryPreview } from "../../components/CategoryPreview";

import "./styles.scss";
import { useSelector } from "react-redux";
import { selectCategories } from "../../store/categories/categories.selector";

export const Categories = () => {
  const categoriesMap = useSelector(selectCategories)


  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];

        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </Fragment>
  );
};
