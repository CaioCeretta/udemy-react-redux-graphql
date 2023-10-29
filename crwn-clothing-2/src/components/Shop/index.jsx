import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";

 
import { Category } from "../Category";

// import { useContext } from "react";

// import { CategoryPreview } from "../CategoryPreview";

import "./styles.scss";
import { Categories } from "../../pages/categories";
// import { CategoriesContext } from "../../contexts/categories.context";

export const Shop = () => {
  // const { categoriesMap } = useContext(CategoriesContext);
  return (
    <Routes>
      <Route index element={<Categories />} />
      <Route path=":category" element={<Category />}/>
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
