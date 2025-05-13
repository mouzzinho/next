'use client'

import Link from 'next/link'
import Image from 'next/image'

import styles from './page.module.scss'

import { useAuthors } from '@/hooks/use-authors'

import BackLink from '@/components/atoms/back-link'

const Page = () => {
    const authors = useAuthors('list')
    const items = authors.list.data?.items || null

    if (!items) return null

    return (
        <section>
            <BackLink url={'/'} />
            <div className={styles.list}>
                {items.map((author) => (
                    <Link
                        key={`author-${author.authorId}`}
                        href={`/authors/${author.authorId}`}
                        className={styles.author}
                    >
                        <Image
                            className={styles.image}
                            src={author.media[0].url}
                            alt={author.media[0].url}
                            width={100}
                            height={150}
                        />
                        <p className={styles.name}>{author.displayName}</p>
                    </Link>
                ))}
            </div>
        </section>
    )
}

export default Page
