import { baseApi } from "@/redux/baseApi";

export const parcelApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        //  admin
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
        //  sender
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
        }),

        cancelParcel: builder.mutation({
            query: (id) => ({
                url: `/parcels/cancel/${id}`,
                method: "PATCH"
            }),
            invalidatesTags: ["PARCEL"]
        }),

        //  receiver 
        incomingParcel: builder.query({
            query: () => ({
                url: "/parcels/incoming",
                method: "GET"
            }),
            providesTags: ["PARCEL"]
        }),

        confirmParcel: builder.mutation({
            query: (id) => ({
                url: `/parcels/confirm-status/${id}`,
                method: "PATCH"
            }),
            invalidatesTags: ["PARCEL"]
        }),

        deliveryHistory: builder.query({
            query: () => {
                return {
                    url: `/parcels/history`,
                    method: "GET",
                };

            },
            providesTags: ["PARCEL"]
        }),
    })
})

export const {
    useAllParcelQuery,
    useUpdateCurrentStatusMutation,
    useCreateParcelMutation,
    useMyParcelQuery,
    useCancelParcelMutation,
    useIncomingParcelQuery,
    useConfirmParcelMutation,
    useDeliveryHistoryQuery
} = parcelApi;