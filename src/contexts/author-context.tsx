import { IAuthor } from '@/models/author.model'
import { createContext } from 'react'

const defaultValues: IAuthor = {
    authorId: null,
    email: '',
    phone: '',
    locale: '',
    displayName: '',
    description: '',
    media: [],
}

export const AuthorContext = createContext<IAuthor>(defaultValues)
