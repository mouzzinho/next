import styles from './page.module.scss'

import { IProduct } from '@/models/product.model'

import BackLink from '@/components/atoms/back-link'
import Link from 'next/link'
import Image from 'next/image'

/*
Opting out of Data Caching
fetch requests are not cached if:

The cache: 'no-store' is added to fetch requests.
The revalidate: 0 option is added to individual fetch requests.
The fetch request is inside a Router Handler that uses the POST method.
The fetch request comes after the usage of headers or cookies.
The const dynamic = 'force-dynamic' route segment option is used.
The fetchCache route segment option is configured to skip cache by default.
The fetch request uses Authorization or Cookie headers and there's an uncached request above it in the component tree.
* */

export default async function Page() {
    const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`, {
        next: { tags: ['products'], revalidate: 3600 },
        // credentials: 'include', Jakby było ciastko
    })
    const products: { items: IProduct[] } = await data.json()

    return (
        <section>
            <BackLink url={'/'} />
            <div className={styles.list}>
                {products.items.map((product) => (
                    <Link
                        key={`product-${product.productId}`}
                        href={`/products/${product.productId}`}
                        className={styles.product}
                    >
                        <Image
                            className={styles.image}
                            src={product.media[0].url}
                            alt={product.media[0].url}
                            width={100}
                            height={150}
                        />
                        <p className={styles.name}>{product.name}</p>
                    </Link>
                ))}
            </div>
        </section>
    )
}
