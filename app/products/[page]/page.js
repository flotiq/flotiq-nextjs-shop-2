import React from 'react'
import { notFound } from 'next/navigation'
import ProductsPage from '../../../templates/products'
import { getProducts } from '../../../lib/shop'
import { getProductsListingData } from '../../../lib/getProductsListingData'
import config from '../../../lib/config'

export async function generateStaticParams() {
    const fetcher = await getProducts(1, config.shop.productPerPage)
    const paths = []
    for (let i = 0; i < fetcher.total_pages; i += 1) {
        paths.push({ page: `${i + 1}` })
    }
    return paths
}

export async function generateMetadata() {
    return {
        title: config.siteMetadata.title,
        description: config.siteMetadata.description,
    }
}

const Page = async ({ params }) => {
    const { page } = await params
    const pageNum = parseInt(page, 10)

    if (isNaN(pageNum) || pageNum < 1 || String(pageNum) !== page) {
        notFound()
    }

    const { products, bestsellers, pageContext } =
        await getProductsListingData(pageNum)

    if (pageNum > pageContext.numPages) {
        notFound()
    }

    return (
        <ProductsPage
            products={products}
            bestsellers={bestsellers}
            pageContext={pageContext}
        />
    )
}

export default Page
