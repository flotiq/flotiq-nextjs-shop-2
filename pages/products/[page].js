import React from 'react';
import ProductsPage from '../../templates/products';
import { getProducts } from '../../lib/shop';
import config from '../../lib/config';
import { replaceUndefinedWithNull } from '../../lib/sanitize';

const Home = ({ product, bestsellers, pageContext }) => (
    <ProductsPage
        products={product}
        bestsellers={bestsellers}
        pageContext={pageContext}
    />
);

export async function getStaticProps({ params }) {
    const fetchProduct = await getProducts(params.page, config.shop.productPerPage);
    const bestsellers = await getProducts(1, config.shop.bestsellerPerPage);
    return {
        props: {
            product: replaceUndefinedWithNull(fetchProduct.data),
            bestsellers: replaceUndefinedWithNull(bestsellers.data),
            pageContext: {
                currentPage: fetchProduct.current_page,
                numPages: fetchProduct.total_pages,
            },
        },
    };
}

export async function getStaticPaths() {
    const fetcher = await getProducts(1, config.shop.productPerPage);
    const paths = [];

    for (let i = 0; i < fetcher.total_pages; i += 1) {
        paths.push({
            params: { page: `${i + 1}` },
        });
    }
    return {
        paths,
        fallback: false,
    };
}
export default Home;
