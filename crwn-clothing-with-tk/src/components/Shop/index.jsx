import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";

import { Category } from "../Category";
// import { useContext } from "react";
import { CategoryPreview } from "../CategoryPreview";
import { Categories } from "../../pages/categories";

import "./styles.scss"// import { CategoriesContext } from "../../contexts/categories.context";
import { getCategoriesAndDocuments } from "../../utils/firebase.utils";
import { setCategories } from "../../store/categories/categories.reducer";

export const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesArray = await getCategoriesAndDocuments('categories');
      dispatch(setCategories(categoriesArray))
    }

    getCategoriesMap();
   }, []);
 
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
