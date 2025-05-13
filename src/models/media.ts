export interface IMedia {
    fileId: number
    locale: string
    type: string
    name: string
    alt: string
    caption: string
    size: number
    checksum: string
    relations: {
        relation: string
        sequence: number
    }[]
    url: string
}
