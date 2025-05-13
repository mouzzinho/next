'use client'

import React, { ChangeEvent, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import styles from './page.module.scss'

import { ILayoutProps } from '@/app/layout'

const Layout: React.FC<ILayoutProps> = ({ children }) => {
    const pathname = usePathname()
    const [value, setValue] = useState('')

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    return (
        <div>
            <nav className={styles.navigation}>
                <ul>
                    {pages.map((page, i) => (
                        <li
                            key={`template-${i}`}
                            className={
                                pathname === page.path ? styles.active : ''
                            }
                        >
                            <Link href={page.path}>{page.name}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
            {children}
            <div className="global-input">
                <p>Input z layout co nie resetuje stanu pomiędzy segmentami</p>
                <input type="text" value={value} onChange={onChange} />
            </div>
        </div>
    )
}

const pages = [
    {
        path: '/template/1',
        name: 'Template 1',
    },
    {
        path: '/template/2',
        name: 'Template 2',
    },
    {
        path: '/template/3',
        name: 'Template 3',
    },
    {
        path: '/template/4',
        name: 'Template 4',
    },
    {
        path: '/template/5',
        name: 'Template 5',
    },
]

export default Layout
