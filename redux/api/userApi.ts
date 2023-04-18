import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { mailOptions, transporter } from "../../config/nodemailer";

interface user{
    email: string,
    phone: string,
    first_name: string,
    last_name: string,
    password: string,
    re_password: string
}


// Define a service using a base URL and expected endpoints
export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'localhost:8000' }),
  endpoints: (build) => ({
    getUser: build.query<user, void>({
      query: () => 'users',
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetUserQuery } = userApi