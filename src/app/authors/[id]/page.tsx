'use client'

import Image from 'next/image'

import styles from './page.module.scss'

import { useAuthors } from '@/hooks/use-authors'
import { AuthorContext } from '@/contexts/author-context'

import BackLink from '@/components/atoms/back-link'
import AuthorForm from '@/components/molecules/author-form'

const Page = () => {
    const author = useAuthors('single').get.data

    console.log(author)

    if (!author) return null

    return (
        <AuthorContext.Provider value={author}>
            <section>
                <BackLink url={'/authors'} />
                <div className={styles.product}>
                    <Image
                        className={styles.image}
                        src={`${author.media[0].url}`}
                        alt={author.media[0].alt}
                        width={300}
                        height={400}
                    />
                    <p className={styles.title}>Title: {author.displayName}</p>
                </div>
                <AuthorForm />
            </section>
        </AuthorContext.Provider>
    )
}

export default Page
