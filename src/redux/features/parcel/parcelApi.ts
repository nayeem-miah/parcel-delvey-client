import { baseApi } from "@/redux/baseApi";

export const parcelApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

        allParcel: builder.query({
            query: ({ page = 1, limit = 10, filter = "" }) => {
                let query = `?page=${page}&limit=${limit}`;
                if (filter) query += `&filter=${filter}`;

                return {
                    url: `/parcels/all${query}`,
                    method: "GET",
                };
            },
        }),

    })
})

export const {
    useAllParcelQuery
} = parcelApi;