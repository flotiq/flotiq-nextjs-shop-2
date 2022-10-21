import React from 'react';
import ProductsPage from '../../templates/products';
import { getShopAll } from '../../lib/shop';
import config from '../../lib/config';

const Home = ({ post, data, pageContext }) => (
    <ProductsPage
        post={post}
        data={data}
        pageContext={pageContext}
    />
);

export async function getStaticProps({ params }) {
    const allPost = await getShopAll(params.page, config.blog.productPerPage);
    const fetchPost = await getShopAll(1, config.blog.postPerPage);
    return {
        props: {
            post: allPost.data,
            data: fetchPost.data,
            pageContext: {
                currentPage: allPost.current_page,
                numPages: allPost.total_pages,
            },
        },
    };
}

export async function getStaticPaths() {
    const fetcher = await getShopAll(1, config.blog.productPerPage);
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
