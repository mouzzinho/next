import Image from 'next/image'
import type { Metadata } from 'next'

import styles from './page.module.scss'

import { IProduct } from '@/models/product.model'

import BackLink from '@/components/atoms/back-link'

export const dynamic = 'force-dynamic' //

type Props = {
    params: Promise<{ id: string }>
}

export default async function Page({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params

    const data = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/products/${id}`
    )
    const product: IProduct = await data.json()

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: product.name,
        image: product.media[0].url,
        description: product.description,
    }

    return (
        <section>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <BackLink url={'/products'} />
            <div className={styles.product}>
                <Image
                    className={styles.image}
                    src={`${product.media[0].url}`}
                    blurDataURL={'placeholder'}
                    priority={true}
                    width={300}
                    height={400}
                    alt={product.media[0].alt}
                    loading={'eager'}
                />
                <p className={styles.title}>Title: {product.name}</p>
            </div>
        </section>
    )
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const id = (await params).id

    const product: IProduct = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/products/${id}`
    ).then((res) => res.json())

    return {
        title: `Produkt - ${product.name}`,
        description: product.description.replace(/(<([^>]+)>)/gi, ''),
        openGraph: {
            title: product.name,
            url: product.pathname,
            description: product.description.replace(/(<([^>]+)>)/gi, ''),
            images: [product.media[0].url],
        },
    }
}
