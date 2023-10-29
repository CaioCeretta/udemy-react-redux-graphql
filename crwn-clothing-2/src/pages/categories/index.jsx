import React, { Fragment } from "react";

import { useContext } from "react";

import { CategoryPreview } from "../../components/CategoryPreview";

import "./styles.scss";
import { CategoriesContext } from "../../contexts/categories.context";

export const Categories = () => {
  const { categoriesMap } = useContext(CategoriesContext);
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
