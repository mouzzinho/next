import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { getUserTokenData } from '@/utils/getUserTokenData'

const alterpressApi = createApi({
    reducerPath: 'alterpressApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${process.env.NEXT_PUBLIC_API_URL}`,
        credentials: 'include',
        prepareHeaders: (headers) => {
            const token = getUserTokenData()
            headers.set('Accept', 'application/json')
            headers.set('Content-Type', 'application/json')
            headers.set('Authorization', `Bearer ${token}`)
            return headers
        },
    }),
    endpoints: () => ({}),
})

export default alterpressApi
