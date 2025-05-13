import { IMedia } from '@/models/media'

export interface IAuthor {
    authorId: number | null
    email: string
    phone: string
    locale: string
    displayName: string
    description: string
    media: IMedia[]
}
