import alterpressApi from './base'
import { IAuthor } from '@/models/author.model'

export const exampleApi = alterpressApi
    .enhanceEndpoints({
        addTagTypes: ['Authors'],
    })
    .injectEndpoints({
        endpoints: (builder) => ({
            getAuthors: builder.query<
                {
                    items: IAuthor[]
                },
                undefined
            >({
                query: () => `/authors?expand=media`,
                providesTags: ['Authors'],
            }),
            getAuthor: builder.query<IAuthor, { id: string }>({
                query: ({ id }) => `/authors/${id}?expand=media`,
                providesTags: ['Authors'],
            }),
        }),
    })

export const { useGetAuthorsQuery, useGetAuthorQuery } = exampleApi
