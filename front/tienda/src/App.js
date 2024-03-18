import * as React from "react";

const products = [
  {
    id: 1,
    nombre: "Carballo",
    cedula: "1009422386",
  },
  {
    id: 2,
    nombre: "Permomo",
    cedula: "1234567890",
  },
  {
    id: 3,
    nombre: "Pepa",
    cedula: "24967429",
  },
];

const ProductCard = ({ product }) => (
  <div className="product-card">
    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/83f2ad5aca04938e6439208dc29deca38614190a12c633826078fead4fa65908?apiKey=5054883b9acb47089a9bda983b189c24&" alt={product.name} className="product-image" />
    <h2 className="product-price-container"> {product.nombre}</h2>
    <h3 className="product-tax">{product.cedula}</h3>
  </div>
);

const addProducto = () => {
  console.log("addProducto");
}
export default function ElectronicsSection() {
  return (
    <>
      <div className="electronics-section">
        <div className="electronics-container">
          <div className="section-title">Electrónica</div>
          <div className="product-grid">
            {products.map((product) => (
              <div key={product.id} className="product-column">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
        <button onClick={addProducto} type="button">
          Agregar Producto
        </button>
      </div>
      <style jsx= "true">{`
        .electronics-section {
          padding-bottom: 80px;
          justify-content: flex-end;
          background-color: #fff;
          display: flex;
          flex-direction: column;
        }

        .electronics-container {
          display: flex;
          width: 100%;
          flex-direction: column;
          padding: 0 20px;
        }

        @media (max-width: 991px) {
          .electronics-container {
            max-width: 100%;
          }
        }

        .section-title {
          color: #202124;
          letter-spacing: 0.2px;
          width: 100%;
          font: 400 30px/113% Roboto, -apple-system, Roboto, Helvetica, sans-serif;
        }

        @media (max-width: 991px) {
          .section-title {
            max-width: 100%;
          }
        }

        .product-grid {
          align-content: flex-start;
          flex-wrap: wrap;
          margin-top: 10px;
          width: 100%;
          gap: 20px;
          display: flex;
        }

        @media (max-width: 991px) {
          .product-grid {
            max-width: 100%;
            flex-direction: column;
            align-items: stretch;
            gap: 0;
          }
        }

        .product-column {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 33%;
          margin-left: 0;
        }

        @media (max-width: 991px) {
          .product-column {
            width: 100%;
          }
        }

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

        .product-image-container {
          border-radius: 8px;
          align-self: stretch;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        @media (max-width: 991px) {
          .product-image-container {
            max-width: 100%;
          }
        }

        .product-image-wrapper {
          background-color: #fff;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        @media (max-width: 991px) {
          .product-image-wrapper {
            max-width: 100%;
          }
        }

        .product-image-background {
          border-radius: 8px;
          background-color: rgba(32, 33, 36, 0.04);
          display: flex;
          flex-direction: column;
          align-items: start;
          justify-content: center;
          padding: 16px;
        }

        @media (max-width: 991px) {
          .product-image-background {
            max-width: 100%;
            padding-right: 20px;
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
          display: flex;
          margin-top: 17px;
          gap: 11px;
        }

        .product-price {
          color: #202124;
          letter-spacing: 0.1px;
          flex-grow: 1;
          font: 700 16px/100% Roboto, -apple-system, Roboto, Helvetica, sans-serif;
        }

        .product-tax {
          color: #5f6368;
          letter-spacing: 0.3px;
          flex-grow: 1;
          flex-basis: auto;
          font: 400 12px/133% Roboto, -apple-system, Roboto, Helvetica, sans-serif;
        }

        .product-name {
          margin-top: 15px;
          width: 100%;
          max-width: 100%;
          color: #5f6368;
          letter-spacing: 0.11px;
          justify-content: center;
          font: 500 16px/24px Roboto, -apple-system, Roboto, Helvetica, sans-serif;
        }

        .product-rating {
          display: flex;
          margin-top: 11px;
          gap: 4px;
          font-weight: 400;
          white-space: nowrap;
        }

        @media (max-width: 991px) {
          .product-rating {
            white-space: initial;
          }
        }

        .rating-stars {
          justify-content: center;
          align-items: center;
          display: flex;
          gap: 0;
          font-size: 8px;
          color: #fbbc04;
          line-height: 180%;
        }

        @media (max-width: 991px) {
          .rating-stars {
            white-space: initial;
          }
        }

        .star {
          font-family: Inter, sans-serif;
          justify-content: center;
          align-self: stretch;
          margin: auto 0;
        }

        @media (max-width: 991px) {
          .star {
            white-space: initial;
          }
        }

        .star:not(.filled) {
          color: #dadce0;
        }

        .rating-count {
          color: #5f6368;
          margin: auto 0;
          font: 12px Roboto, sans-serif;
        }
      `}</style>
    </>
  );
}