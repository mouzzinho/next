import Link from 'next/link'
import React from 'react'

import styles from './page.module.scss'

import { getMenuLinks } from '@/utils/getMenuLinks'

export default async function Home() {
    const availableLinks = await getMenuLinks()

    return (
        <section>
            <ul className={styles.list}>
                {availableLinks.map((item, i) => (
                    <li key={`mainpage-nav-${i}`}>
                        <Link href={item.pathname}>{item.children}</Link>
                    </li>
                ))}
            </ul>
        </section>
    )
}
