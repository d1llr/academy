import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface IUser {
    email: string;
    password: string;
    phone: string,
    last_name: string,
    first_name: string,
    re_password: string
}


// Define a service using a base URL and expected endpoints
export const registerApi = createApi({
    reducerPath: 'registerApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://37.140.195.3:8000/api' }),
    endpoints: (builder) => ({
        getUserregister: builder.mutation<string, IUser>({
            query: (data) => ({
                url: `users/`,
                method: "POST",
                body: {
                    first_name:data.first_name,
                    email: data.email,
                    password: data.password,
                    re_password: data.re_password,
                    last_name: data.last_name,
                    phone: data.phone
                }
            }),
        })
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetUserregisterMutation } = registerApi