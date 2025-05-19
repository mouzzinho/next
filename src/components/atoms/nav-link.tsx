'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import styles from './nav-link.module.scss'
import HomeIcon from '../../../public/home.svg'

interface INavLinkProps {
    link: string
    label: string
    isHome?: boolean
}

const NavLink: React.FC<INavLinkProps> = ({ label, link, isHome }) => {
    const pathname = usePathname()
    const isActive = getIsActive(pathname, link, isHome)

    return (
        <Link
            key={`nav-item-home`}
            aria-label={label}
            href={link}
            className={`${styles.link} ${isActive ? styles.active : ''}`}
        >
            {isHome ? <HomeIcon /> : label}
        </Link>
    )
}

function getIsActive(pathname: string, link: string, isHome?: boolean) {
    if (isHome) {
        return pathname === '/'
    }
    return pathname.includes(link)
}

export default NavLink
