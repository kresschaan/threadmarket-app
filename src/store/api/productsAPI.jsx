import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const productsApi = createApi({
    reducerPath: "createProducts",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://threadmarket-server.onrender.com/api/products",
    }),
    endpoints(builder) {
        return {
            fetchProducts: builder.query({
                query: (product) => {
                    return {
                        url: "/",
                        method: "GET",
                        params: {
                            productId: product,
                        },
                    };
                },
            }),
        };
    },
});

export const { useFetchProductsQuery } = productsApi;
export { productsApi };
