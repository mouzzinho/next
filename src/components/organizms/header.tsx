'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import styles from './header.module.scss'
import HomeIcon from '../../../public/home.svg'

import { getUserTokenData } from '@/utils/getUserTokenData'
import { getMenuLinks } from '@/utils/getMenuLinks'

const Header = () => {
    const pathname = usePathname()
    const token = getUserTokenData()
    const availableLinks = getMenuLinks(token?.token)

    console.log(token)

    return (
        <header className={styles.header}>
            <Link
                key={`nav-item-home`}
                href={'/'}
                className={`
                    ${styles.link} 
                    ${pathname === '/' ? styles.active : ''}`}
            >
                <HomeIcon />
            </Link>
            {availableLinks.map((item, i) => (
                <Link
                    key={`nav-item-${i}`}
                    href={item.pathname}
                    className={`
                    ${styles.link} 
                    ${pathname.includes(item.pathname) ? styles.active : ''}`}
                >
                    {item.children}
                </Link>
            ))}
        </header>
    )
}

export default Header
