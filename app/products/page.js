import config from '../../lib/config'
import ProductsPage from '../../templates/products'
import { getProductsListingData } from '../../lib/getProductsListingData'

export const metadata = {
    title: config.siteMetadata.title,
    description: config.siteMetadata.description,
}

const Page = async () => {
    const { products, bestsellers, pageContext } = await getProductsListingData(1)

    return (
        <ProductsPage
            products={products}
            bestsellers={bestsellers}
            pageContext={pageContext}
        />
    )
}

export default Page
