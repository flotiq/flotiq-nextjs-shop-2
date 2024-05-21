const apiUrl = process.env.FLOTIQ_API_URL;
const apiKey = process.env.FLOTIQ_API_KEY;
const shopApi = `${apiUrl}/api/v1/content/product`;
const DEFAULT_ORDER = 'internal.createdAt';

import {FlotiqApi} from '../flotiqApi/index';

export async function getProducts(
    page = 1,
    limit = 10,
    filters = undefined,
    direction = 'asc',
    orderBy = 'date',
) {

    const api = new FlotiqApi(apiKey);
    return await api.ProductAPI.list({page:page, limit:limit, filters:filters, order_by: orderBy});
}

export async function getProductBySlug(slug) {
    
    const filters = `{"slug":{"type":"equals","filter":"${slug}"}}`;
    const api = new FlotiqApi(apiKey);
    return await api.ProductAPI.list({filters: filters, page: 1, limit: 1});
}
