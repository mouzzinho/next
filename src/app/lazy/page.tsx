'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'

import styles from '@/app/lazy/page.module.scss'

import Button from '@/components/atoms/button'
import Loader from '@/components/atoms/loader'

const Banner = dynamic(() => import('../../components/organizms/banner'), {
    ssr: false,
    loading: () => <Loader />,
})

const Page = () => {
    const [isBannerVisible, setIsBannerVisible] = useState(false)

    const showBanner = () => {
        setIsBannerVisible(true)
    }

    return (
        <section className={styles.container}>
            <Button
                className={styles.button}
                type={'button'}
                onClick={showBanner}
            >
                Load banner
            </Button>
            {isBannerVisible && <Banner />}
            <Banner />
        </section>
    )
}

export default Page
