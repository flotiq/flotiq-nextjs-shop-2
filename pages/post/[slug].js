import React from 'react';
import ProductTemplate from '../../templates/product';
import { getShopAll, getShopBySlug, getShopPrevious, getShopNext } from '../../lib/shop';

const Home = ({ post, pageContext }) => (
    <ProductTemplate
        post={post}
        pageContext={pageContext}
    />
);

export async function getStaticProps({ params }) {
    const postBySlug = await getShopBySlug(params.slug);
    const createdAt = postBySlug?.data[0]?.internal.createdAt;
    const filtersShops = `{"slug":{"type":"notContains","filter":"${params.slug}"}}`;
    const previousPost = await getShopPrevious(createdAt || null);
    const previousPostSlug = (previousPost && previousPost.data && previousPost.data[0])
        ? previousPost.data[0].slug : null;
    const nextPost = await getShopNext(createdAt || null);
    const nextPostSlug = (nextPost && nextPost.data && nextPost.data[0]) ? nextPost.data[0].slug : null;
    const allPost = await getShopAll(1, 4, filtersShops);
    return {
        props: {
            post: postBySlug.data[0],
            pageContext: {
                previous: previousPostSlug,
                next: nextPostSlug,
                pageAll: allPost.data,
            },
        },
    };
}

export async function getStaticPaths() {
    const posts = await getShopAll(1, 10000);
    const postData = posts.data;

    return {
        paths: postData.map((post) => ({
            params: {
                slug: post.slug,
            },
        })),
        fallback: false,
    };
}
export default Home;
