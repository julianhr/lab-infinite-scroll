export function buildUrl(baseUrl, query={}) {
    const urlQuery = Object.entries(query).map(([key, val]) => `${key}=${val}`).join('&')
    return [baseUrl.trim(), urlQuery].join('?')
}
