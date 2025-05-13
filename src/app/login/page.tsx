'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

import styles from './page.module.scss'

import { getUserTokenData } from '@/utils/getUserTokenData'

import Button from '@/components/atoms/button'

const Page = () => {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)
    const token = getUserTokenData()

    console.log(token)

    const createToken = () => {
        localStorage.setItem(
            'tokenData',
            JSON.stringify({
                token: 'wxQBQaVWVw-vyopbFgVVQpEXp2K1sYxM',
                expireAt: new Date().getTime() + 1000000,
            })
        )
        setIsLoading(true)
        setTimeout(() => router.replace('/'), 1000)
    }

    useEffect(() => {
        if (token && !token.isTokenExpired) {
            router.replace('/')
        }
    }, [token, router])

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
