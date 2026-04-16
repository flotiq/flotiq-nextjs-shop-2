import config from '../lib/config'
import { getProducts } from '../lib/shop'
import { replaceUndefinedWithNull } from '../lib/sanitize'
import HomeContent from '../components/HomeContent'

export const metadata = {
    title: config.siteMetadata.title,
    description: config.siteMetadata.description,
}

const Home = async () => {
    const products = await getProducts(1, config.shop.productPerPage)
    const bestsellers = await getProducts(1, config.shop.bestsellerPerPage)

    const productsData = replaceUndefinedWithNull(products.data)
    const bestsellersData = replaceUndefinedWithNull(bestsellers.data)

    return (
        <HomeContent
            products={productsData}
            bestsellers={bestsellersData}
        />
    )
}

export default Home
