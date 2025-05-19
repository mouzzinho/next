'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

import styles from './page.module.scss'

import Button from '@/components/atoms/button'
import { getCookie } from '@/utils/getCookie'

const Page = () => {
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()

    const createToken = async () => {
        setIsLoading(true)
        document.cookie = `session_token=abc123; path=/; max-age=3600; secure`

        if (typeof window !== 'undefined') {
            setTimeout(() => window.location.replace('/'), 1000)
        }
    }

    useEffect(() => {
        const cookie = getCookie('session_token')

        if (cookie) {
            router.replace('/')
        }
    }, [router])

    return (
        <section className={styles.container}>
            <h1>Logowanie</h1>
            <Button onClick={createToken} isLoading={isLoading}>
                Get token
            </Button>
        </section>
    )
}

export default Page
