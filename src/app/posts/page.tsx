import styles from './page.module.scss'

import { IPost } from '@/models/post.model'

import PostCard from '@/components/molecules/post-card'
import BackLink from '@/components/atoms/back-link'

export default async function Page() {
    const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`, {
        cache: 'no-store',
    })
    const posts: { items: IPost[] } = await data.json()

    return (
        <section>
            <BackLink url={'/'} />
            <div className={styles.list}>
                {posts.items.map((post, i) => (
                    <PostCard key={`post-${i}`} post={post} />
                ))}
            </div>
        </section>
    )
}
