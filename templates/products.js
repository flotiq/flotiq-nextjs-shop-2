'use client'

import React from 'react'
import { Header, Pagination } from 'flotiq-components-react'
import ProductCards from '../sections/ProductCards'
import BestSellers from '../sections/BestSellers'
import ImageWithText from '../components/ImageWithText'
import CategoriesChoiceBar from '../components/CategoriesChoiceBar'

const ProductsPage = ({ products, bestsellers, pageContext }) => {
    const categoryTabs = [
        { name: 'Category 1', href: '#', current: true },
        { name: 'Category 2', href: '#', current: false },
        { name: 'Cactus', href: '#', current: false },
        { name: 'Big Plants', href: '#', current: false },
    ]
    return (
        <>
            <CategoriesChoiceBar
                additionalClass={['my-5']}
                categoryTabs={categoryTabs}
            />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    <Header
                        additionalClasses={[
                            '!text-xl md:!text-3xl !font-normal font-roboto !p-0',
                        ]}
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
            <BestSellers
                products={bestsellers}
                additionalClass={['bg-green-gray py-14']}
                headerText="Best sellers"
            />
            <ImageWithText
                image="/assets/bg-image.jpg"
                headerText1="Buy one"
                headerText2="plant get"
                headerText3="one for free"
                buttonLabel="All the products"
                additionalClass={['my-10']}
            />
        </>
    )
}

export default ProductsPage
