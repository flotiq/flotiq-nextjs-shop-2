import React from 'react';
import Head from 'next/head';
import Layout from '../layouts/layout';
import config from '../lib/config';
import { getShopAll } from '../lib/shop';
import ImageWithText from '../components/ImageWithText';
import ImageWithTextBackground from '../public/assets/bg-image.jpg';
import Hero from '../sections/Hero';
import BestSellers from '../sections/BestSellers';
import Products from '../sections/Products';
import ReviewsSection from '../sections/ReviewsSection';
import Avatar from '../public/assets/avatar.png';

const IndexPage = ({ data, post }) => {
    const products = data;
    const bestsellerPosts = post;
    const reviews = [
        {
            review: 'The best store in our town! plants are always in good condition.',
            author: 'Joe Jonas',
        },
        {
            review: 'I ordered 3 packs of roses last friday and they all came so fast and fresh',
            author: 'Kate Smith',
        },
        {
            review: 'The staff was so sweet they helped me decorate my room with plants!',
            author: 'John Doe',
        },
    ];

    return (
        <Layout additionalClass={['bg-white']}>
            <Head>
                <title>{config.siteMetadata.title}</title>
                <meta
                    name="description"
                    content={config.siteMetadata.description}
                />
            </Head>
            <Hero
                headerText="Best Plants for your home"
                paragraphText="Check our store and find the most beautiful plant for your home"
                buttonLabel="All the products"
                heroImage="/assets/hero-bg.jpg"
            />
            <BestSellers products={bestsellerPosts} additionalClass={['bg-green-gray py-14']} headerText="Best sellers" />
            <Products products={products} additionalClass={['my-5']} headerText="Products" />
            <ReviewsSection
                headerText="Reviews"
                reviews={reviews}
                avatar={Avatar}
                additionalClass={['my-10 lg:my-24']}
            />
            <ImageWithText
                image={ImageWithTextBackground}
                headerText1="Buy one"
                headerText2="plant get"
                headerText3="one for free"
                buttonLabel="All the products"
                additionalClass={['']}
            />
        </Layout>
    );
};

export async function getStaticProps({ params }) {
    const allPost = await getShopAll(params.page, config.blog.postPerPage);
    const fetchPost = await getShopAll(params.page, config.blog.bestsellerPerPage);
    return {
        props: {
            post: fetchPost.data,
            data: allPost.data,
            pageContext: {
                currentPage: fetchPost.current_page,
                numPages: fetchPost.total_pages,
            },
        },
    };
}

export async function getStaticPaths() {
    const fetcher = await getShopAll(1, config.blog.postPerPage);
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

export default IndexPage;
