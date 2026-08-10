import api from './api'

export async function getProducts(
    page = 1,
    limit = 10,
    filters = undefined,
    direction = 'asc',
    orderBy = 'date'
) {
    return api.content.product.list({
        page: page,
        limit: limit,
        filters: filters,
        order_by: orderBy,
        hydrate: 1
    })
}

export async function getProductBySlug(slug) {
    return api.content.product.list({
        filters: {
            slug: {
                type: 'equals',
                filter: slug,
            },
        },
        page: 1,
        limit: 1,
        hydrate: 1,
    })
}
