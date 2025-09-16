import { baseApi } from "@/redux/baseApi";

export const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

        register: builder.mutation({
            query: (userInfo) => ({
                url: "/user/register",
                method: "POST",
                data: userInfo
            })
        }),

        login: builder.mutation({
            query: (userInfo) => ({
                url: "/auth/login",
                method: "POST",
                data: userInfo
            })
        }),


        userInfo: builder.query({
            query: () => ({
                url: "/user/me",
                method: "GET"
            }),
            providesTags: ["USER"]
        })
    })
})

export const {
    useRegisterMutation,
    useLoginMutation,
    useUserInfoQuery
} = authApi