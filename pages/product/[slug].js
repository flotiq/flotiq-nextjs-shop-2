import React from 'react';
import ProductTemplate from '../../templates/product';
import { getProducts, getProductBySlug } from '../../lib/shop';
import { replaceUndefinedWithNull } from '../../lib/sanitize';

const Home = ({ product, pageContext }) => (
    
    <ProductTemplate
        product={product}
        pageContext={pageContext}
    />
);

export async function getStaticProps({ params }) {
    const productBySlug = await getProductBySlug(params.slug);
    const filtersShops = `{"slug":{"type":"notContains","filter":"${params.slug}"}}`;
    
    const allProducts = await getProducts(1, 4, filtersShops);
    
    return {
        props: {
            product: replaceUndefinedWithNull(productBySlug.data[0]),
            pageContext: {
                pageAll: replaceUndefinedWithNull(allProducts.data),
            },
        },
    };
}

export async function getStaticPaths() {
    const products = await getProducts(1, 10000);
    
    return {
        paths: products.data.map((product) => ({
            params: {
                slug: product.slug,
            },
        })),
        fallback: false,
    };
}
export default Home;
