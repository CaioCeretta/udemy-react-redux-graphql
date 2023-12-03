import "./styles.scss";

import { ProductCard } from "../ProductCard";
import { Link } from "react-router-dom";

export const CategoryPreview = ({ products, title }) => {
  console.log(title);

  return (
    <div className="category-preview-container">
      <h2>
        <Link to={title}><span>{title.toUpperCase()}</span></Link>
      </h2>
      <div className="preview">
          {products
            .filter((_, idx) => idx < 4)
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </div>
    </div>
  );
};
