import "./styles.scss";

import { Link } from "react-router-dom";
import { ProductCard } from "../ProductCard";

type ProductProps = {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
}

type CategoryPreviewProps = {
  products: ProductProps[];
  title: string;
}

export const CategoryPreview = ({ products, title }: CategoryPreviewProps) => {

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
