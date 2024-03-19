import React, { useState } from 'react';
import ProductCard from './ProductCard';



export default function Tarjeta({ products }) {
    return (
        <div className="product-grid" >
            {products.map((product) => (
                <div key={product.id} className="product-column">
                    <ProductCard product={product} />
                </div>
            ))}
        </div>);
}