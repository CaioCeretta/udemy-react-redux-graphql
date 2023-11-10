import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";


import { Category } from "../Category";
import { useDispatch } from 'react-redux'
// import { useContext } from "react";

// import { CategoryPreview } from "../CategoryPreview";

import { Categories } from "../../pages/categories";
import "./styles.scss";
import { getCategoriesAndDocuments } from "../../utils/firebase.utils";
import { setCategories } from "../../store/categories/categories.action";
// import { CategoriesContext } from "../../contexts/categories.context";



export const Shop = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    async function getCategoriesMap() {
      const categoriesArray = await getCategoriesAndDocuments('categories');
      
      console.log(categoriesArray)

      dispatch(setCategories(categoriesArray))
    }

    getCategoriesMap();
  }, [dispatch])

  // const { categoriesMap } = useContext(CategoriesContext);
  return (
      <Routes>
        <Route index element={<Categories />} />
        <Route path=":category" element={<Category />} />
      </Routes>
    // <div className="shop-container">
    //   {Object.keys(categoriesMap).map((title) => {
    //     const products = categoriesMap[title];

    //     return <CategoryPreview key={title} title={title} products={products} />
    //   })}
    // </div>
  );
};

// export const Shop = () => {
//   const { categoriesMap } = useContext(CategoriesContext);
//   return (
//     <div className="shop-container">
//       {Object.keys(categoriesMap).map((title) => (
//         <Fragment key={title}>
//           <h2>{title}</h2>
//           <div className="products-container">
//             {categoriesMap[title].map((product) => (
//               <CategoryPreview product={product} key={product.id} />
//             ))}
//           </div>
//         </Fragment>
//       ))}
//     </div>
//   );
// };
