'use client'

import React from 'react'
import Hero from '../sections/Hero'
import BestSellers from '../sections/BestSellers'
import Products from '../sections/Products'
import ReviewsSection from '../sections/ReviewsSection'
import ImageWithText from './ImageWithText'
import Layout from '../layouts/layout'

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
]

const HomeContent = ({ products, bestsellers }) => (
    <Layout additionalClass={['bg-white']}>
        <Hero
            headerText="Best Plants for your home"
            paragraphText="Check our store and find the most beautiful plant for your home"
            buttonLabel="All the products"
            heroImage="/assets/hero-bg.jpg"
        />
        <BestSellers
            products={bestsellers}
            additionalClass={['bg-green-gray py-14']}
            headerText="Best sellers"
        />
        <Products
            products={products}
            additionalClass={['my-5']}
            headerText="Products"
        />
        <ReviewsSection
            headerText="Reviews"
            reviews={reviews}
            avatar="/assets/avatar.png"
            additionalClass={['my-10 lg:my-24']}
        />
        <ImageWithText
            image="/assets/bg-image.jpg"
            headerText1="Buy one"
            headerText2="plant get"
            headerText3="one for free"
            buttonLabel="All the products"
            additionalClass={['']}
        />
    </Layout>
)

export default HomeContent
