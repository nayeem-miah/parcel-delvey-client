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
            providesTags: ["PARCEL"]
        }),

        updateCurrentStatus: builder.mutation({
            query: (id) => ({
                url: `/parcels/current-status/${id}`,
                method: "PATCH",
            }),
            invalidatesTags: ["PARCEL"]
        }),

        createParcel: builder.mutation({
            query: (parcelData) => ({
                url: "/parcels",
                method: "POST",
                data: parcelData
            }),
            invalidatesTags: ["PARCEL"]
        }),

        myParcel: builder.query({
            query: ({ page = 1, limit = 10 }) => {
                const query = `?page=${page}&limit=${limit}`;
                return {
                    url: `/parcels/me${query}`,
                    method: "GET",
                };

            },
            providesTags: ["PARCEL"]
        })
    })
})

export const {
    useAllParcelQuery,
    useUpdateCurrentStatusMutation,
    useCreateParcelMutation,
    useMyParcelQuery
} = parcelApi;