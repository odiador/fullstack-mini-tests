const ProductCard = ({ product }) => (
    <>
        <div className="product-card">
            <img className="product-image" src="image.png" alt={product.name} />
            <h2 className="product-price-container"> {product.name}</h2>
            <h3 className="product-tax">{product.cedula}</h3>
        </div>
        <style jsx="true">{
            `
        .product-card {
          background-color: #fff;
          display: flex;
          flex-grow: 1;
          flex-direction: column;
          align-items: start;
          width: 300;
          padding: 10px;
          border: 1px solid;
          border-color: #aaa;
        }

        @media (max-width: 300px) {
          .product-card {
            max-width: 100%;
          }
        }

        .product-image {
          aspect-ratio: 1;
          object-fit: contain;
          object-position: center;
          width: 195px;
          max-width: 100%;
        }

        .product-price-container {
          color: #202124;
          letter-spacing: 0.1px;
          flex-grow: 1;
          font: 700 24px/100% Roboto, -apple-system, Roboto, Helvetica, sans-serif;
        }

        .product-tax {
          color: #5f6368;
          letter-spacing: 0.3px;
          flex-grow: 1;
          flex-basis: auto;
          font: 400 12px/133% Roboto, -apple-system, Roboto, Helvetica, sans-serif;
        }
        `}
        </style>
    </>
);
export default ProductCard;