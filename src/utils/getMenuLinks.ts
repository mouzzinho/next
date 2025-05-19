'use server'

import { cookies } from 'next/headers'
import { MENU } from '@/constants/menu'

export const getMenuLinks = async () => {
    const cookieStore = await cookies()
    const token = cookieStore.get('session_token')

    if (!token) {
        return MENU.filter((item) => !item.adminOnly)
    }

    return MENU
}
