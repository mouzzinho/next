import Image from 'next/image'

import styles from './page.module.scss'

import { IProduct } from '@/models/product.model'

import BackLink from '@/components/atoms/back-link'

export const dynamic = 'force-dynamic' //

export default async function Page({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params

    const data = await fetch(
        `https://api.alterpress.stage.alterpage.pl/products/${id}`
    )
    const product: IProduct = await data.json()

    return (
        <section>
            <BackLink url={'/products'} />
            <div className={styles.product}>
                <Image
                    className={styles.image}
                    src={`${product.media[0].url}`}
                    alt={product.media[0].alt}
                    width={300}
                    height={400}
                />
                <p className={styles.title}>Title: {product.name}</p>
            </div>
        </section>
    )
}
