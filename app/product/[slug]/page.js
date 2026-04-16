import React, { cache } from 'react'
import { notFound } from 'next/navigation'
import ProductTemplate from '../../../templates/product'
import { replaceUndefinedWithNull } from '../../../lib/sanitize'
import { getProductBySlug, getProducts } from '../../../lib/shop'

const getCachedProduct = cache(async (slug) => await getProductBySlug(slug))

export async function generateStaticParams() {
    const fetchAllProducts = replaceUndefinedWithNull(await getProducts(1, 100))
    const allProducts = fetchAllProducts.data

    return allProducts.map((product) => ({
        slug: product.slug,
    }))
}

export async function generateMetadata({ params }) {
    const { slug } = await params
    const productBySlug = await getCachedProduct(slug)
    const product = productBySlug.data[0]

    if (!product) {
        return { title: 'Product' }
    }

    return {
        title: product?.name,
        description: product?.description,
    }
}

const Page = async ({ params }) => {
    const { slug } = await params
    const productBySlug = await getCachedProduct(slug)
    const filtersShops = `{"slug":{"type":"notContains","filter":"${slug}"}}`
    const allProducts = await getProducts(1, 4, filtersShops)
    const productData = replaceUndefinedWithNull(productBySlug.data[0])

    if (!productData) {
        notFound()
    }

    const allProductsData = {
        pageAll: replaceUndefinedWithNull(allProducts.data),
    }

    return (
        <ProductTemplate product={productData} pageContext={allProductsData} />
    )
}

export default Page
