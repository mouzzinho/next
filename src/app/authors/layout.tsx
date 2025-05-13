'use client'

import React from 'react'
import { Provider } from 'react-redux'
import store from '@/redux/store'

export interface ILayoutProps {
    children?: React.ReactNode
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
    return <Provider store={store}>{children}</Provider>
}

export default Layout
