import { useParams } from 'next/navigation'

import { useGetAuthorQuery, useGetAuthorsQuery } from '@/redux/api/authors'

export const useAuthors = (query?: 'single' | 'list') => {
    const params = useParams()
    const id =
        params && params.id && typeof params.id === 'string' ? params.id : ''

    const skipSingleQuery = query !== 'single' || !id
    const skipListQuery = query !== 'list'

    const getAuthorQuery = useGetAuthorQuery({ id }, { skip: skipSingleQuery })
    const getAuthorsQuery = useGetAuthorsQuery(undefined, {
        skip: skipListQuery,
    })

    return {
        get: {
            data: getAuthorQuery.data,
            isFetching: getAuthorQuery.isFetching,
            isLoading: getAuthorQuery.isLoading,
            isSuccess: getAuthorQuery.isSuccess,
            isError: getAuthorQuery.isError,
            errors: getAuthorQuery.error,
        },
        list: {
            data: getAuthorsQuery.data,
            isFetching: getAuthorsQuery.isFetching,
            isLoading: getAuthorsQuery.isLoading,
            isSuccess: getAuthorsQuery.isSuccess,
            isError: getAuthorsQuery.isError,
            errors: getAuthorsQuery.error,
        },
    }
}
