import React from 'react';
import Head from 'next/head';
import { Header, Pagination } from 'flotiq-components-react';
import Layout from '../layouts/layout';
import ProductCards from '../sections/ProductCards';
import BestSellers from '../sections/BestSellers';
import ImageWithText from '../components/ImageWithText';
import config from '../lib/config';
import ImageWithTextBackground from '../public/assets/bg-image.jpg';
import CategoriesChoiceBar from '../components/CategoriesChoiceBar';

const ProductsPage = ({ post, data, pageContext }) => {
    const products = post;
    const allProducts = data;
    const categoryTabs = [
        { name: 'Category 1', href: '#', current: true },
        { name: 'Category 2', href: '#', current: false },
        { name: 'Cactus', href: '#', current: false },
        { name: 'Big Plants', href: '#', current: false },
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
            <CategoriesChoiceBar additionalClass={['my-5']} categoryTabs={categoryTabs} />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    <Header
                        additionalClasses={['!text-xl md:!text-3xl !font-normal font-roboto !p-0']}
                    >
                        Category 1
                    </Header>
                </div>
                <ProductCards products={products} additionalClass="my-5" />
                <Pagination
                    borderVariant="secondary"
                    numOfPages={pageContext.numPages}
                    page={pageContext.currentPage}
                    rounded="none"
                    variant="secondary"
                    containerAdditionalClasses={['!mt-0 mb-10']}
                    baseUrl="/products/"
                />
            </div>
            <BestSellers products={allProducts} additionalClass={['bg-green-gray py-14']} headerText="Best sellers" />
            <ImageWithText
                image={ImageWithTextBackground}
                headerText1="Buy one"
                headerText2="plant get"
                headerText3="one for free"
                buttonLabel="All the products"
                additionalClass={['my-10']}
            />
        </Layout>
    );
};

export default ProductsPage;
