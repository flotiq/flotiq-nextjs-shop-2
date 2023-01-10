const apiUrl = process.env.FLOTIQ_API_URL;
const apiKey = process.env.FLOTIQ_API_KEY;
const shopApi = `${apiUrl}/api/v1/content/product`;
const DEFAULT_ORDER = 'internal.createdAt';

export function getShopUrl(
    page,
    limit,
    filters,
    direction = 'desc',
    orderBy = DEFAULT_ORDER,
    hydrate = 1,
) {
    let url = `${shopApi}?page=${page}&limit=${limit}`
        + `&order_by=${orderBy}&order_direction=${direction}`
        + `&auth_token=${apiKey}`;

    if (filters !== undefined) {
        url += `&filters=${encodeURIComponent(filters)}`;
    }
    if (hydrate !== undefined) {
        url += '&hydrate=1';
    }

    return url;
}

export async function getShopAll(
    page = 1,
    limit = 10,
    filters = undefined,
    direction = 'asc',
    orderBy = 'date',
) {
    const url = getShopUrl(page, limit, filters, direction, orderBy);
    const res = await fetch(url);
    return res.json();
}

export async function getShopBySlug(slug) {
    const filters = `{"slug":{"type":"contains","filter":"${slug}"}}`;
    const url = getShopUrl(1, 1, filters);
    const res = await fetch(url);
    return res.json();
}

export async function getShopPrevious(date) {
    const filters = `{"date":{"type":"lessThan","filter":"${date}"}}`;
    const url = getShopUrl(1, 1, filters, 'desc', 'date');
    const res = await fetch(url);
    return res.json();
}

export async function getShopNext(date) {
    const filters = `{"date":{"type":"greaterThan","filter":"${date}"}}`;
    const url = getShopUrl(1, 1, filters, 'asc', 'date');
    const res = await fetch(url);
    return res.json();
}
