import config from './config'
import { getProducts } from './shop'
import { replaceUndefinedWithNull } from './sanitize'

export async function getProductsListingData(page) {
    const fetchProducts = await getProducts(page, config.shop.productPerPage)
    const bestsellers = await getProducts(1, config.shop.bestsellerPerPage)

    return {
        products: replaceUndefinedWithNull(fetchProducts.data),
        bestsellers: replaceUndefinedWithNull(bestsellers.data),
        pageContext: {
            currentPage: fetchProducts.current_page,
            numPages: fetchProducts.total_pages,
        },
    }
}
