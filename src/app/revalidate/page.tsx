'use client'

import styles from './page.module.scss'

import Button from '@/components/atoms/button'
import revalidateProducts from '@/actions/revalidateProducts'

const Page = () => {
    return (
        <div className={styles.container}>
            Po kliknięciu czyści cache listingu produktów
            <Button onClick={revalidateProducts}>Revalidate products</Button>
        </div>
    )
}

export default Page
