import React from 'react';
import ProductCard from '../components/ProductCard';
import FlotiqImage from '../lib/FlotiqImage';

const ProductCards = ({ products, additionalClass }) => (
    <div
        className={['grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 mt-6 mb-6', ...additionalClass].join(' ')}
    >
        {products.map((product) => (
            <ProductCard
                key={product.id}
                name={product.name}
                description={product.description}
                price={product.price}
                productImage={FlotiqImage.getSrc(product.productImage[0], 0, 0)}
                buttonLabel="Add to cart"
                slug={product.slug}
            />
        ))}
    </div>
);

export default ProductCards;
