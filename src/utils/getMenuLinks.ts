import { MENU } from '@/constants/menu'

export const getMenuLinks = (token?: string) => {
    if (!token) {
        return MENU.filter((item) => !item.adminOnly)
    }

    return MENU
}
