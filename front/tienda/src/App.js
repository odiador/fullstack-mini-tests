import React, { useState } from 'react';
import Input from "./CreateInput";
import Tarjeta from "./Card.js";

const App = () => {
  const [products, setProducts] = useState([]);

  return (
    <div className="root">
      <Input setProducts={setProducts} />
      <h1>¿Cuál de todos es Pipe Bueno?</h1>
      <Tarjeta products={products} />
      <style jsx="true">{`
        .root {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .electronics-section {
          padding-bottom: 80px;
          justify-content: center;
          align-content: center;
          background-color: #fff;
          display: flex;
          flex-direction: column;
        }
        
        .section-title {
          padding: 10px;
          color: #202124;
          letter-spacing: 0.2px;
          width: 100%;
          align-self: center;
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
          width: 20%;
          margin-left: 0;
        }

        @media (max-width: 991px) {
          .product-column {
            width: 25%;
            flex-grow: 2;
            display: flex;
          }
        }
      `}
      </style>
    </div >
  );
}
export default App;