import React from 'react'

import styles from './header.module.scss'

import { getMenuLinks } from '@/utils/getMenuLinks'
import NavLink from '@/components/atoms/nav-link'

const Header = async () => {
    const availableLinks = await getMenuLinks()

    return (
        <header className={styles.header}>
            <NavLink
                key={'nav-item-home'}
                label={'Home'}
                link={'/'}
                isHome={true}
            />
            {availableLinks.map((item, i) => (
                <NavLink
                    key={`nav-item-${i}`}
                    link={item.pathname}
                    label={item.children}
                />
            ))}
        </header>
    )
}

export default Header
