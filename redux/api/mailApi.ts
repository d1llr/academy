import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { mailOptions, transporter } from "../../config/nodemailer";

interface mail{
    firstName: string,
    phone: string,
    comments: string
}


// Define a service using a base URL and expected endpoints
export const mailApi = createApi({
  reducerPath: 'mailApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/assets/contacts.js' }),
  endpoints: (build) => ({
    sendEmail: build.query<mail, mail>({
      query: ()=>{
        
      },
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useSendEmailQuery } = mailApi