import React from 'react'
import Script from 'next/script'

export interface ILayoutProps {
    children?: React.ReactNode
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
    return (
        <>
            {children}
            <Script src="https://www.tiktok.com/embed.js" />
        </>
    )
}

export default Layout
