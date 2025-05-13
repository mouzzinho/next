import Link from 'next/link'
import React from 'react'

import styles from './page.module.scss'

import { getMenuLinks } from '@/utils/getMenuLinks'

export default function Home() {
    const availableLinks = getMenuLinks()

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
