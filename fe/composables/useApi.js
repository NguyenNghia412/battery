export const baseFetch = (url = '', opts = {}) => {
    const config = useRuntimeConfig();
    const baseURL = config.public.baseURL;

    return $fetch(`${baseURL}/${url}`, {
        baseURL,
        ...opts
    })
}

export const useGetCat = async () => await baseFetch('api/product-categories', {
    method: 'get'
});